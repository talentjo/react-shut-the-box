import { createBrowserHistory } from 'history'
import { applyMiddleware, compose, createStore } from 'redux'
import { routerMiddleware } from 'connected-react-router'
import createRootReducer from './reducers'

import posts from './data/posts'

export const history = createBrowserHistory()

export default function configureStore(preloadedState) {
  const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
  const defaultState = {
    posts,
  }
  const store = createStore(
    createRootReducer(history),
    defaultState,
    composeEnhancer(
      applyMiddleware(
        routerMiddleware(history),
      ),
    ),
  )

  // Hot reloading
  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./reducers', () => {
      store.replaceReducer(createRootReducer(history));
    });
  }

  return store
}
