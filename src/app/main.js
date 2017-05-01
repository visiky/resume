import React from 'react';
import { render } from 'react-dom';
import injectTapEventPlugin from 'react-tap-event-plugin';
// 添加 redux-devtools
import { devToolsEnhancer } from 'redux-devtools-extension';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from './App';
import rootReducer from './reducers';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();

// 添加样式
import './less/layout.less';
import './less/style.less';
import './less/style-print.less';



const store = createStore(rootReducer,devToolsEnhancer());
const rootEl = document.getElementById('root');
render(
  <AppContainer>
    <Provider store={store}>
      <App />
    </Provider>
  </AppContainer>,
  rootEl
);

if(module.hot){
	module.hot.accept('./App',() => {
		const NextApp = require('./App').default;
		render(
			<AppContainer>
				<Provider store={store}>
					<NextApp />
				</Provider>
			</AppContainer>,
		rootEl
		);
	});
}
