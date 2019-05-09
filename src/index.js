import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import ThemeProvider from '@material-ui/styles/ThemeProvider';
import * as serviceWorker from './serviceWorker';
import App from './components/App';
import store from './redux/store';
import './index.scss';

import { createMuiTheme } from '@material-ui/core/styles';

const palette = {
  primary: { main: '#8E54E9' },
  secondary: { main: '#296cd1' }
};

const theme = createMuiTheme({ palette });

ReactDOM.render(
	<Provider store={store}>
		<ThemeProvider theme={theme}>
			<App />
		</ThemeProvider>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
