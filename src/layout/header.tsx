import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { useModeSwitcher } from '@/hooks/useModeSwitcher';
import { getSearchObj } from '@/helpers/location';
import './header.less';

const Header: React.FC = () => {
  const [ModeSwitcher] = useModeSwitcher({});

  function gotoOnlineVersion() {
    const query = getSearchObj();
    if (typeof window !== 'undefined') {
      window.open(`https://visiky.github.io/resume/?user=${query.user}`);
    }
  }

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        <span className={'action-link'} onClick={() => window.print()}>
          下载
        </span>
        <span className={'action-link'} onClick={gotoOnlineVersion}>
          在线版本
        </span>
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
