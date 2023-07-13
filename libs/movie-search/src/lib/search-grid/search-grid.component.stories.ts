import { Meta } from '@storybook/angular';
import { SearchGridComponent } from './search-grid.component';

export default {
  title: 'SearchGridComponent',
  component: SearchGridComponent,
} as Meta<SearchGridComponent>;

export const Primary = {
  render: (args: SearchGridComponent) => ({
    props: args,
  }),
  args: {},
};
