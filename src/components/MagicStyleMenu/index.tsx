import React from 'react';
import { renderToString } from 'react-dom/server';
import { Button } from 'antd';
import { convertHTML } from '@/helpers/convertHTML';

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
      baseNode;
      baseOffset;
    };
    const baseText = selection.baseNode.textContent.slice(
      selection.baseOffset,
      selection.baseOffset + selection.toString().length
    );

    console.log({
      baseText: selection.toString(),
      baseTextC: baseText,
    });
    const baseNode = selection.baseNode;
    const baseHTML = baseNode.innerHTML ?? convertHTML(baseText);
    const html = baseNode.parentElement.outerHTML;
    const headLength = html.split(baseHTML).at(0).length;

    let newOuterHTML = null;
    if (headLength === html.length) {
      newOuterHTML = html.replace(
        baseHTML,
        renderToString(<SignText>{baseText}</SignText>)
      );
    } else {
      const headHTML = html.slice(0, headLength);
      const tailHTML = html
        .split(headHTML)[1]
        .replace(baseHTML, renderToString(<SignText>{baseText}</SignText>));
      newOuterHTML = `${headHTML}${tailHTML}`;
    }

    // debugger;
    baseNode.parentElement.outerHTML = newOuterHTML;
  };

  return (
    <div className="magic-menu">
      <Button onClick={handleSign}>标注</Button>
    </div>
  );
};
