import React from 'react';
import { Icon, IconProps } from './Icon';
import { Story } from '@storybook/react';
import { Icons } from '../../types';

const Template: Story<IconProps> = (args) => <Icon {...args} />;

export const Interactive = Template.bind({});
Interactive.args = {
  iconName: Icons.chevronRight,
};

export default {
  title: 'Icon',
  component: Icon,
};
