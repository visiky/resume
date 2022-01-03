import React, { useCallback, useState, useEffect } from 'react';
import { Button, Affix, Upload, message, Spin, Modal } from 'antd';
import fetch from 'cross-fetch';
import qs from 'query-string';
import { RcFile } from 'antd/lib/upload';
import _ from 'lodash';
import { RESUME_INFO } from '../datas/resume';
import { copyToClipboard } from '../helpers/copy-to-board';
import { getDevice } from '../helpers/detect-device';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import { ResumeConfig, ThemeConfig } from './types';
import './index.less';

const Page: React.FC = () => {
  const [config, setConfig] = useState<ResumeConfig>();
  const [loading, updateLoading] = useState<boolean>(true);
  const [mode, updateMode] = useState<string>('read');
  const [template, updateTemplate] = useState<string>('template1');
  const [theme, setTheme] = useState<ThemeConfig>({
    color: '#2f5785',
    tagColor: '#8bc34a',
  });

  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    if (query.template) {
      updateTemplate(query.template as string);
    }
  }, []);

  useEffect(() => {
    const search = typeof window !== 'undefined' && window.location.search;
    const query = qs.parse(search);
    const user = query.user || '';
    const branch = query.branch || 'master';
    const mode = (query.mode as string) || 'read';

    fetch(
      `https://raw.githubusercontent.com/${user}/${user}/${branch}/resume.json`
    )
      .then(data => {
        if (data.status !== 200) {
          const link = `https://github.com/${user}/${user}/tree/${branch}`;
          Modal.info({
            title: '获取简历信息失败',
            content: (
              <div>
                请检查用户名 {user} 是否正确或者简历信息是否在
                <a href={link} target="_blank">{`${link}/resume.json`}</a>下
              </div>
            ),
            okText: '进入在线编辑',
            onOk: () => {
              setConfig(RESUME_INFO);
              updateLoading(false);
              updateMode('edit');
            },
          });
          return;
        }
        return data.json();
      })
      .then(data => {
        setConfig(data);
        updateLoading(false);
        updateMode(mode);
      });
  }, []);

  const onConfigChange = useCallback(
    (v: Partial<ResumeConfig>) => {
      setConfig(_.assign({}, config, v));
    },
    [config]
  );

  const onThemeChange = useCallback(
    (v: Partial<ThemeConfig>) => {
      setTheme(_.assign({}, theme, v));
    },
    [theme]
  );

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
          {config && (
            <Resume value={config} theme={theme} template={template} />
          )}
          {mode === 'edit' && (
            <React.Fragment>
              <Affix offsetTop={0}>
                <Button.Group className="btn-group">
                  <Drawer
                    value={config}
                    onValueChange={onConfigChange}
                    theme={theme}
                    onThemeChange={onThemeChange}
                    template={template}
                    onTemplateChange={updateTemplate}
                  />
                  <React.Fragment>
                    <Upload
                      accept=".json"
                      showUploadList={false}
                      beforeUpload={importConfig}
                    >
                      <Button className="btn-upload">导入配置</Button>
                    </Upload>
                    <Button type="primary" onClick={copyConfig}>
                      复制配置
                    </Button>
                    <Button type="primary" onClick={() => window.print()}>
                      PDF 下载
                    </Button>
                  </React.Fragment>
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
            </React.Fragment>
          )}
        </div>
      </Spin>
    </React.Fragment>
  );
};

export default Page;
