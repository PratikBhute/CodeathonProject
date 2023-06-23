import { moduleMetadata } from '@storybook/angular';
import { RegistrationComponent } from '../app/componants/registration/registration.component';
import type { Meta, StoryObj } from '@storybook/angular';
export default {
  title: 'Registration',
  decorators: [
    moduleMetadata({
      declarations: [RegistrationComponent],
    }),
  ],
};

export const Default = () => ({
  component: RegistrationComponent, 
  props: {
    username: 'john_doe',
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    password: '',
    gender: 'Male',
    onSignUp: (formData: any) => {
      // Handle sign-up logic here
      console.log('Form Data:', formData);
      // Perform API calls, data validation, or any other necessary operations
    },
  },
  template :`<app-registration></app-registration>`
});

