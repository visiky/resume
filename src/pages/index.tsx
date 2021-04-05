import React from 'react';
// 添加 redux-devtools
import { Provider } from 'react-redux';
import { Helmet } from 'react-helmet';
import { createStore } from 'redux';
import App from '../components/App';
import rootReducer from '../reducers';

// 添加样式
import '@/less/layout.less';

const store = createStore(rootReducer);

const Page = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Resume Generator</title>
        <link
          rel="stylesheet"
          type="text/css"
          href="./font-awesome.min.css"
        />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  );
};

export default Page;
