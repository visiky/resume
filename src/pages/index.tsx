import React from 'react';
// 添加 redux-devtools
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import App from '../components/App';
import rootReducer from '../reducers';

// 添加样式
import '@/less/layout.less';

const store = createStore(rootReducer);

const Page = () => {
  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
};

export default Page;
