import React from 'react';
import { Button, ButtonProps } from './Button';
import { Story } from '@storybook/react';

import { Colors } from '../types';

const Template: Story<ButtonProps> = (args) => <Button {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  text: 'Click Me',
  onClick: () => alert('You clicked the button!'),
  color: Colors.primary,
};

export const Primary = Template.bind({});
Primary.args = {
  ...Interactive.args,
  color: Colors.primary,
};

export const Secondary = Template.bind({});
Secondary.args = {
  ...Interactive.args,
  color: Colors.secondary,
};

export const Success = Template.bind({});
Success.args = {
  ...Interactive.args,
  color: Colors.success,
};

export const Danger = Template.bind({});
Danger.args = {
  ...Interactive.args,
  color: Colors.danger,
};

export const Warning = Template.bind({});
Warning.args = {
  ...Interactive.args,
  color: Colors.warning,
};

export const Info = Template.bind({});
Info.args = {
  ...Interactive.args,
  color: Colors.info,
};

export const Black = Template.bind({});
Black.args = {
  ...Interactive.args,
  color: Colors.black,
};

export const White = Template.bind({});
White.args = {
  ...Interactive.args,
  color: Colors.white,
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...Interactive.args,
  disabled: true,
};

export default {
  title: 'Button',
  component: Button,
};
