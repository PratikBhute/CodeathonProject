import { Meta,  StoryObj } from '@storybook/angular/dist/client/public-types';
import { RegistrationComponent } from './registration.component';



const meta: Meta<RegistrationComponent> = {
  title: 'Registration',
  component: RegistrationComponent,
  tags: ['autodocs'],
  
  render: (args: RegistrationComponent) => ({

    props: {
      firstName: args.firstName,
      lastName: args.lastName,
      username: args.username,
      mobileNo: args.mobileNo,
      email: args.email,
      password: args.password,
      onRegister: () => {
        // Perform registration action here
        console.log('Registering user:', args.firstName, args.lastName);
      },
      
    }

  }),

  argTypes: {
    backgroundColor: {
      control: 'color',
   
    firstName: { control: 'text' },
    lastName: { control: 'text' },
    username: { control: 'text' },
    mobileNo: { control: 'text' },
    email: { control: 'email' },
    password: { control: 'password' },
  },
}
};
RegistrationComponent.args = {
  firstName: '',
  lastName: '',
  username: '',
  mobileNo: '',
  email: '',
  password: '',
};
export default meta;
type Story = StoryObj<RegistrationComponent>;

// More on writing stories with args: https://storybook.js.org/docs/angular/writing-stories/args
export const Primary: Story = {
  args: {
    primary: false,
    label: 'Button',
  },
};


export const Secondary: Story = {
  args: {
    label: 'Button',
  },
};

export const Large: Story = {
  args: {
    size: 'large',
    label: 'Button',
  },
};

export const Small: Story = {
  args: {
    size: 'small',
    label: 'Button',
    
  },
};

export const medium: Story = {
  args: {
    size: 'medium',
    label: 'Button',

  },
};


  
  