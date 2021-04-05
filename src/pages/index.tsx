import React from 'react';
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
        {/* for live demo */}
        <link rel="stylesheet" href="/resume/font-awesome.min.css" />
        {/* for local development */}
        <link rel="stylesheet" href="/font-awesome.min.css" />
      </Helmet>
      <Provider store={store}>
        <App />
      </Provider>
    </React.Fragment>
  );
};

export default Page;
