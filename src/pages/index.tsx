import React from 'react';
import { Helmet } from 'react-helmet';
import Footer from '@/layout/footer';
import Content from '@/components';
import './index.less';

const Page = () => {
  return (
    <React.Fragment>
      <Helmet>
        <title>Resume Generator</title>
      </Helmet>
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
