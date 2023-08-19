import { Component, ElementRef, Input, AfterContentInit } from '@angular/core';
import { Timer, TimerStatus } from './timer.models';

type TimeLeft = {
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
  status: TimerStatus = TimerStatus.indeterminate;

  /**
   * @ignore
   */
  timerLength = 0;

  get mainTimerLength() {
    return Math.min(this.timerLength / this._duration, 1) * this.totalLength;
  }

  get overtimeTimerLength() {
    return Math.min(Math.max(this.timerLength - this._duration, 0) / this._duration, 1) * this.totalLength;
  }

  /**
   * @ignore
   * stores the circumference of the circle based on the contents of the component
   */
  totalLength = 0;

  /**
   * @ignore
   */
  timeLeft: TimeLeft = {
    hours: 0,
    minutes: 0,
    seconds: 0,
  };

  timerStatus = TimerStatus;

  constructor(private element: ElementRef<HTMLDivElement>) { }

  /**
   * @ignore
   */
  ngAfterContentInit(): void {
    this.totalLength = Math.PI * this.element.nativeElement.clientWidth;
  }

  @Input()
  set timer(value: Timer) {
    console.log('set timer reached!');
    switch (value.type) {
      case 'countdown':
        if (value.endTime) {
          this.status = TimerStatus.complete;
        } else if (value.startTime && Date.now() - value.startTime.getTime() > value.duration) {
          this.status = TimerStatus.overtime;
        } else if (value.startTime) {
          this.status = TimerStatus.started;
        } else {
          this.status = TimerStatus.notStarted;
        }

        this._startTime = value.startTime?.getTime();
        this._endTime = value.endTime?.getTime();
        this._duration = value.duration;
        break;
      case 'complete':
        this.status = TimerStatus.complete;
        break;
      case 'indeterminate':
        this.status = TimerStatus.indeterminate;
        break;
    }

    this.resetStatus();
  }

  /**
   * @ignore
   * I actually would suggest calling this "tick", since it's not necessarily
   * doing much with resetting the status except for in very few instances;
   * additionally, since you suggest that this is a dumb component, the
   * ticking probably should exist and be managed on a timer object and this
   * updates with the changes in that object
   */
  private resetStatus = (): void => {
    switch (this.status) {
      case TimerStatus.notStarted:
        this.timerLength = 0;
        break;
      case TimerStatus.started:
      case TimerStatus.overtime: {
        // most of the counting here was changed from counting down from 360 to counting up
        this.timerLength = this._startTime ? Date.now() - this._startTime : 0;
        const msLeft = this._duration - this.timerLength;

        // this probably should be taken out of this component if it's supposed to be dumb/display-only...
        if (this.timerLength - this._duration >= 0 && this.status != TimerStatus.overtime) {
          this.status = TimerStatus.overtime;
        }
        else if (this.timerLength >= this._duration * 2) {
          this.status = TimerStatus.complete;
        }

        this.timeLeft = {
          hours: Math.floor(Math.abs(msLeft) / 3600000),
          minutes: Math.floor((Math.abs(msLeft) % 3600000) / 60000),
          seconds: Math.floor((Math.abs(msLeft) % 60000) / 1000)
        };

        // using `requestAnimationFrame` because the `setTimeout` was
        // still making it look choppy and despite being set to 250ms,
        // it was only ticking once per second; this smoothed it out
        // dramatically
        requestAnimationFrame(this.resetStatus);

        break;
      }
      case TimerStatus.complete:
        this.timeLeft = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        break;
      case TimerStatus.indeterminate:
        this.timerLength = 0;
        this.timeLeft = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        break;
    }
  }
}
