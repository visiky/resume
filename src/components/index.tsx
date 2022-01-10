import React, { useCallback, useState, useEffect, useRef } from 'react';
import { Button, Affix, Upload, message, Spin, Modal } from 'antd';
import fetch from 'cross-fetch';
import qs from 'query-string';
import { RcFile } from 'antd/lib/upload';
import _ from 'lodash';
import { getLanguage, getLocale } from '@/locale';
import { useModeSwitcher } from '@/hooks/useModeSwitcher';
import { DEFAULT_TITLE_NAME_MAP } from '@/datas/constant';
import { RESUME_INFO } from '@/datas/resume';
import { customAssign } from '@/helpers/customAssign';
import { copyToClipboard } from '@/helpers/copy-to-board';
import { getDevice } from '@/helpers/detect-device';
import { Drawer } from './Drawer';
import { Resume } from './Resume';
import { ResumeConfig, ThemeConfig } from './types';
import './index.less';

export const Page: React.FC = () => {
  const lang = getLanguage();
  const i18n = getLocale();

  const [, mode, changeMode] = useModeSwitcher({});

  const originalConfig = useRef<ResumeConfig>();
  const [config, setConfig] = useState<ResumeConfig>();
  const [loading, updateLoading] = useState<boolean>(true);
  const [template, updateTemplate] = useState<string>('template1');
  const [theme, setTheme] = useState<ThemeConfig>({
    color: '#2f5785',
    tagColor: '#8bc34a',
  });

  const changeConfig = (v: Partial<ResumeConfig>) => {
    setConfig(_.assign({}, { titleNameMap: DEFAULT_TITLE_NAME_MAP }, v));
  };

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
    fetch(
      `https://raw.githubusercontent.com/${user}/${user}/${branch}/resume.json`
    )
      .then(data => {
        if (data.status !== 200) {
          const link = `https://github.com/${user}/${user}/tree/${branch}`;
          if (mode === 'edit') {
            Modal.info({
              title: i18n.get('获取简历信息失败'),
              content: (
                <div>
                  请检查用户名 {user} 是否正确或者简历信息是否在
                  <a href={link} target="_blank">{`${link}/resume.json`}</a>下
                </div>
              ),
              okText: i18n.get('确定'),
              onOk: () => {
                originalConfig.current = RESUME_INFO;
                changeConfig(
                  _.omit(
                    customAssign(
                      {},
                      RESUME_INFO,
                      _.get(RESUME_INFO, ['locales', lang])
                    ),
                    ['locales']
                  )
                );
                updateLoading(false);
              },
            });
          } else {
            Modal.info({
              title: i18n.get('获取简历信息失败'),
              content: (
                <div>
                  请检查用户名 {user} 是否正确或者简历信息是否在
                  <a href={link} target="_blank">{`${link}/resume.json`}</a>下
                </div>
              ),
              okText: i18n.get('进入在线编辑'),
              onOk: () => {
                originalConfig.current = RESUME_INFO;
                changeConfig(
                  _.omit(
                    customAssign(
                      {},
                      RESUME_INFO,
                      _.get(RESUME_INFO, ['locales', lang])
                    ),
                    ['locales']
                  )
                );
                updateLoading(false);
                changeMode('edit');
              },
            });
          }

          return;
        }
        return data.json();
      })
      .then(data => {
        originalConfig.current = data;
        changeConfig(
          _.omit(customAssign({}, data, _.get(data, ['locales', lang])), [
            'locales',
          ])
        );
        updateLoading(false);
      });
  }, [lang]);

  const onConfigChange = useCallback(
    (v: Partial<ResumeConfig>) => {
      changeConfig(_.assign({}, config, v));
    },
    [config, lang]
  );

  const onThemeChange = useCallback(
    (v: Partial<ThemeConfig>) => {
      setTheme(_.assign({}, theme, v));
    },
    [theme]
  );

  useEffect(() => {
    if (getDevice() === 'mobile') {
      message.info(i18n.get('移动端只提供查看功能，在线制作请前往 PC 端'));
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
          message.success(i18n.get('上传配置已应用'));
        } catch (err) {
          message.error(i18n.get('上传文件有误，请重新上传'));
        }
      };
      reader.readAsText(file);
    } else {
      message.error(
        i18n.get('您当前浏览器不支持 FileReader，建议使用谷歌浏览器')
      );
    }
    return false;
  };

  const copyConfig = () => {
    let fullConfig = config;
    if (lang !== 'zh_CN') {
      fullConfig = customAssign({}, originalConfig?.current, {
        locales: { [lang]: config },
      });
    }
    copyToClipboard(JSON.stringify({ ...fullConfig, theme }));
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
                    key={'1'}
                  />
                  <Upload
                    accept=".json"
                    showUploadList={false}
                    beforeUpload={importConfig}
                    key={'2'}
                  >
                    <Button className="btn-upload">
                      {i18n.get('导入配置')}
                    </Button>
                  </Upload>
                  <Button type="primary" onClick={copyConfig} key="3">
                    {i18n.get('复制配置')}
                  </Button>
                  <Button type="primary" onClick={() => window.print()} key="4">
                    {i18n.get('PDF 下载')}
                  </Button>
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
