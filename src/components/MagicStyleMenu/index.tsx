import React from 'react';
import { Button } from 'antd';
import { handleSelectionReplace } from './helpers/selection';
import { useReplaceEffect } from './helpers/effect';

import './index.less';

const SignText = ({ children }) => {
  return (
    <span
      style={{
        backgroundColor: 'var(--primary-color)',
        color: 'white',
      }}
    >
      {children}
    </span>
  );
};

export const MagicStyleMenu = () => {
  const handleSign = () => {
    const selection = window.getSelection() as Selection & {
      baseNode: HTMLElement;
      baseOffset: number;
      extentNode: HTMLElement;
      extentOffset: number;
    };
    handleSelectionReplace(selection, text => <SignText>{text}</SignText>);
  };

  useReplaceEffect();

  return (
    <div className="magic-menu">
      <Button onClick={handleSign}>标注</Button>
    </div>
  );
};
