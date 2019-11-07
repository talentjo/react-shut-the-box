import React from 'react';
import { storiesOf } from '@storybook/react';
import StoryRouter from 'storybook-react-router'
import Logo from './';

const logoStories = storiesOf('Logo', module)
  .add('Greact logo', () => (
    <Logo>Greact</Logo>
  ))
  .add('Custom logo', () => (
    <Logo>Something funky</Logo>
  ))

  logoStories.addDecorator(StoryRouter())