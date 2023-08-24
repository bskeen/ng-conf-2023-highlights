import { Component, ElementRef, Input, AfterContentInit } from '@angular/core';
import { Timer, TimerStatus } from './timer.models';

interface TimeLeft {
  hours: number;
  minutes: number;
  seconds: number;
}

@Component({
  selector: 'time-tracker-timer',
  templateUrl: './timer.component.html',
  styleUrls: ['./timer.component.scss'],
})
export class TimerComponent implements AfterContentInit {
  /**
   * @ignore
   */
  _startTime?: number;

  /**
   * @ignore
   */
  _endTime?: number;

  /**
   * @ignore
   */
  _duration = 0;

  /**
   * @ignore
   */
  _status: TimerStatus = TimerStatus.indeterminate;

  /**
   * @ignore
   */
  _timerLength = 0;

  /**
   * @ignore
   */
  _mainTimerLength = 0;

  /**
   * @ignore
   */
  _overtimeTimerLength = 0;

  /**
   * Stores the circumference of the circle based on the contents of the component
   *
   * @ignore
   */
  _totalLength = 0;

  /**
   * @ignore
   */
  _timeLeft: TimeLeft = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  _timerStatus = TimerStatus;

  constructor(private element: ElementRef<HTMLDivElement>) { }

  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    this._totalLength = Math.PI * this.element.nativeElement.clientWidth;
    this._resetTimerLengths();
  }

  @Input()
  set timer(value: Timer) {
    console.log('set timer reached!');
    switch (value.type) {
      case 'countdown':
        if (value.endTime) {
          this._status = TimerStatus.complete;
        } else if (value.startTime && Date.now() - value.startTime.getTime() > value.duration) {
          this._status = TimerStatus.overtime;
        } else if (value.startTime) {
          this._status = TimerStatus.started;
        } else {
          this._status = TimerStatus.notStarted;
        }

        this._startTime = value.startTime?.getTime();
        this._endTime = value.endTime?.getTime();
        this._duration = value.duration;
        this._resetTimerLengths();
        break;
      case 'complete':
        this._status = TimerStatus.complete;
        break;
      case 'indeterminate':
        this._status = TimerStatus.indeterminate;
        break;
    }

    this._recalculate();
  }

  /**
   * @ignore
   * I actually would suggest calling this "tick", since it's not necessarily
   * doing much with resetting the status except for in very few instances;
   * additionally, since you suggest that this is a dumb component, the
   * ticking probably should exist and be managed on a timer object and this
   * updates with the changes in that object
   */
  private _recalculate = (): void => {
    switch (this._status) {
      case TimerStatus.notStarted:
        this._timerLength = 0;
        this._resetTimerLengths();
        break;
      case TimerStatus.started:
      case TimerStatus.overtime: {
        // most of the counting here was changed from counting down from 360 to counting up
        this._timerLength = this._startTime ? Date.now() - this._startTime : 0;
        this._resetTimerLengths();
        const msLeft = this._duration - this._timerLength;

        // this probably should be taken out of this component if it's supposed to be dumb/display-only...
        if (this._timerLength - this._duration >= 0 && this._status != TimerStatus.overtime) {
          this._status = TimerStatus.overtime;
        }
        else if (this._timerLength >= this._duration * 2) {
          this._status = TimerStatus.complete;
        }

        this._timeLeft = {
          hours: Math.floor(Math.abs(msLeft) / 3600000),
          minutes: Math.floor((Math.abs(msLeft) % 3600000) / 60000),
          seconds: Math.floor((Math.abs(msLeft) % 60000) / 1000)
        };

        // using `requestAnimationFrame` because the `setTimeout` was
        // still making it look choppy and despite being set to 250ms,
        // it was only ticking once per second; this smoothed it out
        // dramatically
        requestAnimationFrame(this._recalculate);

        break;
      }
      case TimerStatus.complete:
        this._timeLeft = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        break;
      case TimerStatus.indeterminate:
        this._timerLength = 0;
        this._resetTimerLengths();
        this._timeLeft = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        break;
    }
  }

  /**
   * @ignore
   */
  _resetTimerLengths(): void {
    const nonzeroDuration = this._duration ? this._duration : 1;
    this._mainTimerLength = Math.min(this._timerLength / nonzeroDuration, 1) * this._totalLength;
    this._overtimeTimerLength = Math.min(Math.max(this._timerLength - this._duration, 0) / nonzeroDuration, 1) * this._totalLength;
  }
}
