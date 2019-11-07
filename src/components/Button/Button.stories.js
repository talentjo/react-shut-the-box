import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from './';

storiesOf('Button', module)
  .add('with text', () => (
    <Button>Standard button</Button>
  ))
  .add('disabled', () => (
    <Button disabled={true}>Disabled button</Button>
  ))
