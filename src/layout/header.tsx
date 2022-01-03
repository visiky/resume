import React from 'react';
import { LangSwitcher } from '@/components/LangSwitcher';
import { useModeSwitcher } from '@/hooks/useModeSwitcher';
import './header.less';

const Header: React.FC = () => {
  const [ModeSwitcher] = useModeSwitcher({});

  return (
    <header>
      <span />
      <span>
        {ModeSwitcher}
        <LangSwitcher />
      </span>
    </header>
  );
};

export default Header;
