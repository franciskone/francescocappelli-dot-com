import React from 'react';
import '../styles/globals.css';
import { Windmill } from '@windmill/react-ui';

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
};

export const decorators = [
  (Story) => (
    <div className="flex justify-center items-center h-screen">
      <Story />
    </div>
  ),
];
