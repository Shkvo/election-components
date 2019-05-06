import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider';
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
		<MuiThemeProvider theme={theme}>
			<App />
		</MuiThemeProvider>
	</Provider>,
	document.getElementById('root')
);

serviceWorker.unregister();
