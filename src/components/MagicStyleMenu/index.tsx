import React from 'react';
import { renderToString } from 'react-dom/server';
import { Button } from 'antd';

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
    const selection = window.getSelection() as Selection & { baseNode };
    const baseText = window.getSelection().toString();
    const baseNode = selection.baseNode;

    baseNode.parentElement.outerHTML = baseNode.parentElement.outerHTML.replace(
      baseText,
      renderToString(<SignText>{baseText}</SignText>)
    );
  };

  return (
    <div className="magic-menu">
      <Button onClick={handleSign}>标注</Button>
    </div>
  );
};
