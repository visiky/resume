import React from 'react';
import { Helmet } from 'react-helmet';
import ReactGA from 'react-ga';
import Footer from '@/layout/footer';
import Content from '@/components';
import './index.less';

ReactGA.initialize('G-2K3PH6MKBG');

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
