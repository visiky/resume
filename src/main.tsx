import React from 'react'
import { render } from 'react-dom'
import injectTapEventPlugin from 'react-tap-event-plugin'
// 添加 redux-devtools
import { devToolsEnhancer } from 'redux-devtools-extension'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import App from './App'
import rootReducer from './reducers'

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin()

// 添加样式
import './less/layout.less'

const store = createStore(rootReducer, devToolsEnhancer({}))
const rootEl = document.getElementById('root')
render(
  <Provider store={store}>
    <App />
  </Provider>,
  rootEl
)

if (module && module.hot) {
  module.hot.accept()
}
