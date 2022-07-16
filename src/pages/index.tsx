import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Content from '@/components';
import { EN_US_LOCALE } from '@/locale/locales/en_US';
import { registerLocale } from '@/locale';
import './index.less';

import { useRightClickMenu } from '../hooks';

registerLocale('en_US', EN_US_LOCALE);

const Page = () => {
  const [title, changeTitle] = useState('Resume Generator');
  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    if (query.user) {
      changeTitle(`${query.user}'s resume`);
    }
  }, []);

  useRightClickMenu(<div>这是一个DEMO</div>);

  return (
    <React.Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </React.Fragment>
  );
};

export default Page;
