import React, { useCallback, useState, useEffect } from 'react';
import { Button, Affix, Upload, message, Spin } from 'antd';
import fetch from 'cross-fetch';
import { RcFile } from 'antd/lib/upload';
import _ from 'lodash';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import { Print } from './Print';
import { copyToClipboard } from '../helpers/copy-to-board';
import { ResumeConfig, ThemeConfig } from './types';
import './index.less';
import { getDevice } from '../helpers/detect-device';

const Page: React.FC = () => {
  const [config, setConfig] = useState<ResumeConfig>();
  const [loading, updateLoading] = useState<boolean>(true);
  const [theme, setTheme] = useState<ThemeConfig>({
    color: '#2f5785',
    tagColor: '#8bc34a',
  });

  useEffect(() => {
    fetch(
      'https://raw.githubusercontent.com/visiky/visiky/master/data/resume.json'
    )
      .then(data => data.json())
      .then(data => {
        setConfig(data);
        updateLoading(false);
      });
  }, []);

  const onConfigChange = useCallback(
    (v: Partial<ResumeConfig>) => {
      setConfig(_.assign({}, config, v));
    },
    [config]
  );

  const onThemeChange = useCallback((v: Partial<ThemeConfig>) => {
    setTheme(_.assign({}, theme, v));
  }, []);

  useEffect(() => {
    if (getDevice() === 'mobile') {
      message.info('移动端只提供查看功能，在线制作请前往 PC 端');
    }
  }, []);

  const [box, setBox] = useState({ width: 0, height: 0, left: 0 });

  useEffect(() => {
    const targetNode = document.querySelector('.resume-content');
    if (!targetNode) return;

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

  const importConfig = (file: RcFile) => {
    if (window.FileReader) {
      const reader = new FileReader();
      reader.onload = () => {
        try {
          if (reader.result) {
            // @ts-ignore
            const newConfig: ConfigProps = JSON.parse(reader.result);
            onThemeChange(newConfig.theme);
            onConfigChange(_.omit(newConfig, 'theme'));
          }
          message.success('上传配置已应用');
        } catch (err) {
          message.error('上传文件有误，请重新上传');
        }
      };
      reader.readAsText(file);
    } else {
      message.error('您当前浏览器不支持 FileReader，建议使用谷歌浏览器');
    }
    return false;
  };

  const copyConfig = () => {
    copyToClipboard(JSON.stringify({ ...config, theme }));
  };

  return (
    <React.Fragment>
      <Spin spinning={loading}>
        <div className="page">
          {config && <Resume value={config} theme={theme} />}
          <Affix offsetTop={0}>
            <Button.Group className="btn-group">
              <Button type="primary" disabled>
                主题配置
              </Button>
              <Print />
              <Drawer
                value={config}
                onValueChange={onConfigChange}
                theme={theme}
                onThemeChange={onThemeChange}
              />
              <Button.Group className="btn-group" style={{ marginLeft: 0 }}>
                <Upload
                  accept=".json"
                  showUploadList={false}
                  beforeUpload={importConfig}
                >
                  <Button>导入配置</Button>
                </Upload>
                <Button type="primary" onClick={copyConfig}>
                  复制配置
                </Button>
              </Button.Group>
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
      </Spin>
    </React.Fragment>
  );
};

export default Page;
