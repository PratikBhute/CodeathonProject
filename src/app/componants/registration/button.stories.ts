import type { Meta, StoryObj } from '@storybook/angular';
import { RegistrationComponent } from './registration.component';

// More on how to set up stories at: https://storybook.js.org/docs/angular/writing-stories/introduction
const meta: Meta<RegistrationComponent> = {
  title: 'registration',
  component: RegistrationComponent,
  tags: ['autodocs'],
  render: (args: RegistrationComponent) => ({
    props: {
      backgroundColor: null,
      ...args,
    },
  }),
  argTypes: {
  firstName: {
      control: 'color',
    

    },
    lastName: {
      control: 'color',
    },
    email: {
      control: 'color',
    },
    mobileNo: {
      control: 'color',
    },
    password: {
      control: 'color',
    },
    onRegister: {
      control: 'color',
    },
    username: {
      control: 'color',


    },
  },
};

export default meta;
type Story = StoryObj<RegistrationComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args


