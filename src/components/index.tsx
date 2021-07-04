import React, { useCallback, useState, useEffect } from 'react';
import { Button, Affix } from 'antd';
import _ from 'lodash';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import { ResumeConfig, ThemeConfig } from './types';
import { RESUME_INFO } from './constant';
import { Print } from './Print';
import './index.less';

const Page: React.FC = () => {
  const [config, setConfig] = useState<ResumeConfig>(RESUME_INFO);
  const [theme, setTheme] = useState<ThemeConfig>({ color: '#2f5785', tagColor: '#8bc34a' });

  const onConfigChange = useCallback(
    (v: Partial<ResumeConfig>) => {
      setConfig(_.assign({}, config, v));
    },
    [config]
  );

  const onThemeChange = useCallback((v: Partial<ThemeConfig>) => {
    setTheme(_.assign({}, theme, v));
  }, []);

  const [box, setBox] = useState({ width: 0, height: 0, left: 0 });

  useEffect(() => {
    const targetNode = document.querySelector('.resume-content');

    const observer = new MutationObserver(() => {
      setBox(targetNode.getBoundingClientRect());
    });
    observer.observe(targetNode, {
      childList: true,
      subtree: true,
      attributes: true,
    });

    // 再加一个定时器，监控下变化
    const interval = setInterval(() => {
      setBox(targetNode.getBoundingClientRect());
    }, 1000);

    return () => {
      observer.disconnect();
      clearInterval(interval);
    };
  }, []);

  return (
    <React.Fragment>
      <div className="page">
        <Resume value={config} theme={theme} />
        <Affix offsetTop={0}>
          <Button.Group className="btn-group">
            <Print />
            <Button type="primary" disabled>
              主题配置
            </Button>
            <Drawer
              value={config}
              onValueChange={onConfigChange}
              theme={theme}
              onThemeChange={onThemeChange}
            />
          </Button.Group>
        </Affix>
        <div
          className="box-size-info"
          style={{
            top: `${box.height + 4}px`,
            left: `${box.width + box.left}px`,
          }}
        >
          ({box.width}, {box.height})
        </div>
      </div>
    </React.Fragment>
  );
};

export default Page;
