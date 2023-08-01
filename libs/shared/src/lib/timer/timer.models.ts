export interface CountdownTimer {
  type: 'countdown';
  startTime?: Date;
  duration: number;
  endTime?: Date;
}

export interface CompleteTimer {
  type: 'complete';
}

export interface IndeterminateTimer {
  type: 'indeterminate';
}

export type Timer = CountdownTimer | CompleteTimer | IndeterminateTimer;

export enum TimerStatus {
  notStarted,
  started,
  overtime,
  complete,
  indeterminate
}
