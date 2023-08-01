import { Meta } from '@storybook/angular';
import { TimerComponent } from './timer.component';

export default {
  title: 'TimerComponent',
  component: TimerComponent,
} as Meta<TimerComponent>;

export const Primary = {
  render: (args: TimerComponent) => ({
    props: args,
    template: `<time-tracker-timer [timer]="timer"><img width="200" height="200" src="https://openclipart.org/image/800px/23996" /></time-tracker-timer>`
  }),
  args: {
    timer: {
      type: 'countdown',
      startTime: new Date(Date.now()),
      duration: 30000
    },
  },
};
