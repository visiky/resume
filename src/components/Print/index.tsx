import React from 'react';
import { Button } from 'antd';
import './index.less';

type Props = {};

export const Print = ({}: Props) => {
  const print = () => {
    window.print();
  };

  return (
    <Button
      type="primary"
      onClick={print}
      style={{ display: 'block', marginTop: '8px' }}
    >
      PDF 下载
    </Button>
  );
};
