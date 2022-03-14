import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import './header.less';

const Header: React.FC = () => {
  const [ModeSwitcher] = useModeSwitcher({});
  const query = getSearchObj();

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        <a className={'action-link'}  href={`/?user=${query.user}`} target="_blank">在线版本</a>
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
