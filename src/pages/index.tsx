import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import Footer from '@/layout/footer';
import Content from '@/components';
import './index.less';

const Page = () => {
  const [title, changeTitle] = useState('Resume Generator');
  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    if (query.user) {
      changeTitle(`${query.user}'s resume`);
    }
  }, []);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
