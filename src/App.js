import React from 'react'
import PropTypes from 'prop-types'
import { ThemeProvider } from 'styled-components';
import { ConnectedRouter } from 'connected-react-router'
import routes from './routes'

// Components
import Container from './components/Container';

// Styling
import theme from './styles/Theme';
import './styles/main.css';
import 'normalize.css'

const App = ({ history }) => {
  console.log(history);
  return (
    <ThemeProvider theme={theme}>
      <ConnectedRouter history={history}>
        <Container>{ routes }</Container>
      </ConnectedRouter>
    </ThemeProvider>
  )
}

App.propTypes = {
  history: PropTypes.object,
}

export default App
