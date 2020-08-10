import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import Main from './components/main';
import store from './redux/store';
import CustomTheme from './customTheme';
import { ThemeProvider } from '@material-ui/styles';
import './reset.scss';
import './style.scss';

const Root = (
  <Provider store={store}>
    <ThemeProvider theme={CustomTheme}>
      <Main />
    </ThemeProvider>
  </Provider>
);

ReactDOM.render(Root, document.getElementById('root'));