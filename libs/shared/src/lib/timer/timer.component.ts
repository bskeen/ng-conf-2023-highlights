import { Component, Input } from '@angular/core';
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
export class TimerComponent {
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
  timerAngle = 360;

  /**
   * @ignore
   */
  timeLeft: TimeLeft = {
    hours: 0,
    minutes: 0,
    seconds: 0
  };

  timerStatus = TimerStatus;

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

  private resetStatus = (): void => {
    console.log('reset status reached!');

    switch (this.status) {
      case TimerStatus.notStarted:
        this.timerAngle = 360;
        break;
      case TimerStatus.started:
      case TimerStatus.overtime: {
        const elapsedTime = this._startTime ? Date.now() - this._startTime : 0;
        const msLeft = this._duration - elapsedTime;

        this.timeLeft = {
          hours: Math.floor(Math.abs(msLeft) / 3600000),
          minutes: Math.floor((Math.abs(msLeft) % 3600000) / 60000),
          seconds: Math.floor((Math.abs(msLeft) % 60000) / 1000)
        };

        if (elapsedTime > this._duration) {
          this.status = TimerStatus.overtime;
          this.timerAngle = Math.abs(msLeft) > this._duration ? 0 : 360 - Math.abs(msLeft) * 360 / this._duration;
        } else {
          this.timerAngle = msLeft * 360 / this._duration;
        }

        setTimeout(this.resetStatus, 250);

        break;
      }
      case TimerStatus.complete:
        this.timerAngle = 0;
        this.timeLeft = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };

        break;
      case TimerStatus.indeterminate:
        this.timerAngle = 360;
        this.timeLeft = {
          hours: 0,
          minutes: 0,
          seconds: 0
        };
        break;
    }
  }
}
