import React from 'react';
import { Story } from '@storybook/react';
import { Button, ButtonProps } from './Button';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

// Here we export a variant of the default template passing props
export const ButtonPrimary = Template.bind({});
ButtonPrimary.args = {
  text: 'Click Me',
  onClick: () => alert('You clicked the button!'),
};

// Here we export a variant of the default template passing props
export const ButtonDisabled = Template.bind({});
ButtonDisabled.args = {
  ...ButtonPrimary.args,
  disabled: true,
};

// Here we export the default component that
// will be used by Storybook to show it inside the sidebar
export default {
  title: 'Button',
  component: Button,
  argTypes: {
    disabled: { control: 'boolean' },
  },
};
