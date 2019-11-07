import { configure, addDecorator } from '@storybook/react';
import '../src/styles/main.css';
import theme from '../src/styles/Theme';
import React from 'react';
import { ThemeProvider } from 'styled-components';

const req = require.context('../src/components', true, /\.stories\.js$/);

function loadStories() {
  req.keys().forEach(filename => req(filename));
}

addDecorator((story) => (
  <ThemeProvider theme={theme}>
    {story()}
  </ThemeProvider>
))

configure(loadStories, module);