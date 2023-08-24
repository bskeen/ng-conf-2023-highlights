import { Meta, moduleMetadata } from '@storybook/angular';
import { TimerComponent } from './timer.component';
import { MatCardModule } from '@angular/material/card';

export default {
  title: 'TimerComponent',
  component: TimerComponent,
  decorators: [
    moduleMetadata({
      imports: [
        MatCardModule
      ]
    })
  ]
} as Meta<TimerComponent>;

export const Primary = {
  render: (args: TimerComponent) => ({
    props: args,
    template: `<time-tracker-timer [timer]="timer"><img width="200" height="200" src="https://yt3.ggpht.com/a-/AAuE7mC75lyDOGkH_0L4_ZR6F4bfGviFjsMZIGa22w=s900-mo-c-c0xffffffff-rj-k-no" /></time-tracker-timer>`
  }),
  args: {
    timer: {
      type: 'countdown',
      startTime: new Date(Date.now()),
      duration: 10000
    },
  },
};
