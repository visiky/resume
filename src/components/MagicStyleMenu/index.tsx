import React from 'react';
import './index.less';

import { Button } from 'antd';

export const MagicStyleMenu = () => {
  const handleSign = () => {
    const selection = window.getSelection() as Selection & { baseNode };
    const baseText = window.getSelection().toString();
    const baseNode = selection.baseNode;

    if (baseNode.nodeName === '#text') {
      baseNode.textContent = baseNode.textContent.replace(
        baseText,
        '<div>TEXT</div>'
      );
    }

    console.log('baseText', [baseNode], baseText);
  };

  return (
    <div className="magic-menu">
      <Button onClick={handleSign}>标注</Button>
    </div>
  );
};
