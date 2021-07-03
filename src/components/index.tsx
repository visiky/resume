import React, { useCallback, useState } from 'react';
import { Button } from 'antd';
import _ from 'lodash';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import { ResumeConfig } from './types';
import { RESUME_INFO } from './constant';
import { Print } from './Print';
import './index.less';

const Page: React.FC = () => {
  const [config, setConfig] = useState<ResumeConfig>(RESUME_INFO);
  const onConfigChange = useCallback(
    (v: Partial<ResumeConfig>) => {
      setConfig(_.assign({}, config, v));
    },
    [config]
  );

  return (
    <React.Fragment>
      <div className="page">
        <Resume value={config} />
        <Button.Group className="btn-group">
          <Print />
          <Button type="primary" disabled>
            <div style={{ fontSize: '10px' }}>主题配置</div>
            <div style={{ fontSize: '8px' }}>(建设中)</div>
          </Button>
          <Drawer value={config} onValueChange={onConfigChange} />
        </Button.Group>
      </div>
    </React.Fragment>
  );
};

export default Page;
