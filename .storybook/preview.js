import React from 'react';
import '../styles/globals.css';

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
