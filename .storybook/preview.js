//https://github.com/tuchk4/storybook-readme/issues/221#issuecomment-620493394
import { addParameters, addDecorator } from '@storybook/react';
import { addReadme } from 'storybook-readme';

addDecorator(addReadme);
addParameters({
  options: {
    theme: {},// this is just a workaround for addon-readme
  },
});
