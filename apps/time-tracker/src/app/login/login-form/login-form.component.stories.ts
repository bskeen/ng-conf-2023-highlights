import { Meta, applicationConfig, moduleMetadata } from '@storybook/angular';
import { LoginFormComponent } from './login-form.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { ReactiveFormsModule } from '@angular/forms';
import { provideAnimations } from '@angular/platform-browser/animations';

export default {
  title: 'LoginFormComponent',
  component: LoginFormComponent,
  parameters: {
    layout: 'fullscreen'
  },
  decorators: [
    moduleMetadata({
      imports: [
        MatFormFieldModule,
        MatButtonModule,
        MatSelectModule,
        MatInputModule,
        ReactiveFormsModule
      ]
    }),
    applicationConfig({
      providers: [provideAnimations()]
    })
  ],
  argTypes: { formSubmitted: { action: 'formSubmitted' } }
} as Meta<LoginFormComponent>;

export const Primary = {
  render: (args: LoginFormComponent) => ({
    props: args,
  }),
  args: {},
};
