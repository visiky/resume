import React from 'react';
import { Button, message, Divider } from 'antd';
import { HighlightOutlined } from '@ant-design/icons';
import { handleSelectionReplace } from './helpers/selection';
import { useReplaceEffect } from './helpers/effect';
import type { ReplaceEffect } from './helpers/effect';

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

interface MagicStyleMenuProps {
  onSign?: (list: [Array<ReplaceEffect>, Array<ReplaceEffect>]) => void;
  defaultMount?: Array<ReplaceEffect>;
  defaultUnMount?: Array<ReplaceEffect>;
}

export const MagicStyleMenu: React.FC<MagicStyleMenuProps> = ({
  onSign,
  defaultMount,
  defaultUnMount,
}) => {
  const [mountEffectList, unmountEffectList] = useReplaceEffect();

  // console.log('default', { defaultMount, defaultUnMount });

  const handleSign = () => {
    const selection = window.getSelection() as Selection & {
      anchorNode: HTMLElement;
      anchorOffset: number;
      baseNode: HTMLElement;
      baseOffset: number;
      extentNode: HTMLElement;
      extentOffset: number;
    };
    try {
      handleSelectionReplace(selection, text => <SignText>{text}</SignText>);
      message.success('标注成功');
      onSign?.([mountEffectList, unmountEffectList]);
    } catch (error) {
      message.error('一次选中多个分片，暂未处理该部分逻辑');
    }
  };

  return (
    <div className="magic-menu">
      <div className="magin-menu__title">实验功能</div>
      <Divider style={{ margin: '2px 0 12px 0' }} />
      <Button onClick={handleSign}>
        <HighlightOutlined />
        标注
      </Button>
    </div>
  );
};
