import { Meta } from '@storybook/angular';
import { StatusComponent } from './status.component';

export default {
  title: 'StatusComponent',
  component: StatusComponent,
} as Meta<StatusComponent>;

export const Primary = {
  render: (args: StatusComponent) => ({
    props: args,
  }),
  args: {},
};
