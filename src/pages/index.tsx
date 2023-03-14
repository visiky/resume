import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet';
import qs from 'query-string';
import Header from '@/layout/header';
import Footer from '@/layout/footer';
import Content from '@/components';
import EN_US_LOCALE from '@/i18n/locales/en-US.json';
import { getLanguage, registerLocale, getLocale } from '@/i18n';
import { IntlProvider } from 'react-intl';
import './index.less';

registerLocale('en-US', EN_US_LOCALE);

const Page = () => {
  const [title, changeTitle] = useState('Resume Generator');
  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    if (query.user) {
      changeTitle(`${query.user}'s resume`);
    }
  }, []);

  const lang = getLanguage();
  return (
    <IntlProvider locale={lang} messages={getLocale(lang)}>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Header />
      <Content />
      <Footer />
    </IntlProvider>
  );
};

export default Page;
