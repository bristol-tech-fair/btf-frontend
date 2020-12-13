import { addDecorator } from '@storybook/react';
import React from 'react';
import Theme from '../src/theme';

function withGlobalStyles(storyFn) {
  return (
    <>
      <Theme />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' }
};
