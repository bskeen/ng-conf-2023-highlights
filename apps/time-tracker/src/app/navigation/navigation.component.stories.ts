import { Meta, moduleMetadata } from '@storybook/angular';
import { NavigationComponent } from './navigation.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { Component } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@Component({
  selector: 'tt-test-component',
  template: 'This is a test component.'
})
export class TestComponent {}

export default {
  title: 'NavigationComponent',
  component: NavigationComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({
      imports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
      ]
    })
  ]
} as Meta<NavigationComponent>;

export const Primary = {
  render: (args: NavigationComponent) => ({
    props: args,
  }),
  args: {},
};
