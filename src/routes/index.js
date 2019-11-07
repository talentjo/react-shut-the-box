import React from 'react'
import { Route, Switch } from 'react-router'
import Home from '../pages/Home'
import Test from '../pages/Test'
import Counter from '../components/Counter'
import Posts from '../pages/Posts'
import PostSingle from '../pages/PostSingle'
import NoMatch from '../components/NoMatch'
import Header from '../components/Header'
import Logo from '../components/Logo';

const routes = (
  <div>
    <Header>
      <Logo>Shut the box</Logo>
    </Header>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/test" component={Test} />
      <Route path="/counter" component={Counter} />
      <Route exact path="/blog" component={Posts} />
      <Route path="/blog/:slug" component={PostSingle} />
      <Route component={NoMatch} />
    </Switch>
  </div>
)

export default routes
