import { Meta, moduleMetadata } from '@storybook/angular';
import { AppComponent } from './app.component';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule } from '@angular/router';
import { Component } from '@angular/core';
import { NavigationComponent } from './navigation/navigation.component';

@Component({
  selector: 'tt-test-component',
  template: 'This is a test component.'
})
export class TestComponent {}

export default {
  title: 'AppComponent',
  component: AppComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({
      declarations: [NavigationComponent],
      imports: [
        MatIconModule,
        MatButtonModule,
        MatToolbarModule,
        MatSidenavModule,
        MatListModule,
        BrowserAnimationsModule,
        RouterModule.forChild([
          {
            path: '/',
            component: TestComponent
          }
        ])
      ]
    })
  ]
} as Meta<AppComponent>;

export const Primary = {
  render: (args: AppComponent) => ({
    props: args
  }),
  args: {},
};
