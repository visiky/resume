import React from 'react';
import { Helmet } from 'react-helmet';
import Content from '../components';

const Page = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Resume Generator</title>
      </Helmet>
      <Content />
    </React.Fragment>
  );
};

export default Page;
