import React from 'react';
import { storiesOf } from '@storybook/react';
import Hello from './';

storiesOf('Hello', module)
  .add('Greet by name', () => (
    <Hello name="Carl" />
  ))
  .add('No name specified - use default', () => (
    <Hello />
  ))
