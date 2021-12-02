import { addDecorator } from '@storybook/react';
import React from 'react';
import Theme from '../src/theme';
// import StoryRouter from 'storybook-react-router';
import { MemoryRouter } from 'react-router-dom';

function withGlobalStyles(storyFn) {
  return (
    <>
      <Theme />
      {storyFn()}
    </>
  );
}

addDecorator(withGlobalStyles);
// addDecorator(StoryRouter());
addDecorator((story) => (
  <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
));

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  options: {
    storySort: (a, b) =>
      a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, undefined, { numeric: true })
  }
};
