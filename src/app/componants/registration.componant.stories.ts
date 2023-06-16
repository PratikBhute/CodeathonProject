import { Meta, Story, moduleMetadata } from '@storybook/angular';
import { RegistrationComponent } from '../componants/registration/registration.component';

export default {
    title: 'Registration',
    component: RegistrationComponent,
  };
  const Template: Story = (args) => ({
    template: `
      <app-registration></app-registration>
    `,
  });
  export const Basic = Template.bind({});
  export const WithFormErrors = Template.bind({});
  WithFormErrors.args = {
    formErrors: {
      email: 'This field is required',
      password: 'This field is required',
    },
  };
  export const WithSuccessMessage = Template.bind({});
  WithSuccessMessage.args = {
    successMessage: 'You have successfully registered',
  };
  