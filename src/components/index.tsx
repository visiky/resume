import React, { useCallback, useState } from 'react';
import { Button, Affix } from 'antd';
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
        <Affix offsetTop={0}>
          <Button.Group className="btn-group">
            <Print />
            <Button type="primary" disabled>
              主题配置
            </Button>
            <Drawer value={config} onValueChange={onConfigChange} />
          </Button.Group>
        </Affix>
      </div>
    </React.Fragment>
  );
};

export default Page;
