import React, { useState, useRef } from 'react';
import {
  Drawer as AntdDrawer,
  Button,
  Collapse,
  Modal,
  Radio,
  Popover,
} from 'antd';
import { DeleteFilled, InfoCircleFilled } from '@ant-design/icons';
import { DndProvider, useDrag, useDrop } from 'react-dnd';
import { HTML5Backend } from 'react-dnd-html5-backend';
import _ from 'lodash';
import arrayMove from 'array-move';
import { FormCreator } from '../../helpers/FormCreator';
import { MODULES, CONTENT_OF_MODULE } from '../../helpers/contant';
import { ResumeConfig, ThemeConfig } from '../types';
import './index.less';

const { Panel } = Collapse;

type Props = {
  value: ResumeConfig;
  onValueChange: (v: Partial<ResumeConfig>) => void;
  theme: ThemeConfig;
  onThemeChange: (v: Partial<ThemeConfig>) => void;

  style?: object;
};

const type = 'DragableBodyRow';

const DragableRow = ({ index, moveRow, ...restProps }) => {
  const ref = useRef();
  const [{ isOver, dropClassName }, drop] = useDrop({
    accept: type,
    collect: monitor => {
      // @ts-ignore
      const { index: dragIndex } = monitor.getItem() || {};
      if (dragIndex === index) {
        return {};
      }
      return {
        isOver: monitor.isOver(),
        dropClassName:
          dragIndex < index ? ' drop-over-downward' : ' drop-over-upward',
      };
    },
    drop: item => {
      // @ts-ignore
      moveRow(item.index, index);
    },
  });
  const [, drag] = useDrag({
    type,
    item: { index },
    collect: monitor => ({
      isDragging: monitor.isDragging(),
    }),
  });
  drop(drag(ref));

  return (
    <div
      ref={ref}
      className={`${isOver ? dropClassName : ''}`}
      style={{ cursor: 'move' }}
      {...restProps}
    />
  );
};

/**
 * @description 简历配置区
 */
export const Drawer: React.FC<Props> = props => {
  const [visible, setVisible] = useState(false);
  const [childrenDrawer, setChildrenDrawer] = useState(null);
  const [currentContent, updateCurrentContent] = useState(null);

  const [type, setType] = useState('module');

  const swapItems = (moduleKey: string, oldIdx: number, newIdx: number) => {
    const newValues = _.clone(_.get(props.value, moduleKey, []));
    props.onValueChange({
      [moduleKey]: arrayMove(newValues, newIdx, oldIdx),
    });
  };

  const deleteItem = (moduleKey: string, idx: number) => {
    const newValues = _.get(props.value, moduleKey, []);
    props.onValueChange({
      [moduleKey]: newValues.slice(0, idx).concat(newValues.slice(idx + 1)),
    });
  };

  return (
    <>
      <Button
        type="primary"
        onClick={() => setVisible(true)}
        style={props.style}
      >
        进行配置
        <Popover content="移动端模式下，只支持预览，不支持配置">
          <InfoCircleFilled style={{ marginLeft: '4px' }} />
        </Popover>
      </Button>
      <AntdDrawer
        title={
          <Radio.Group value={type} onChange={e => setType(e.target.value)}>
            <Radio.Button value="module">模块</Radio.Button>
            <Radio.Button value="theme">样式</Radio.Button>
          </Radio.Group>
        }
        width={480}
        onClose={() => setVisible(false)}
        visible={visible}
      >
        {type === 'module' ? (
          <DndProvider backend={HTML5Backend}>
            <div className="module-list">
              {MODULES.map(module => {
                if (_.endsWith(module.key, 'List')) {
                  const values = _.get(props.value, module.key, []);
                  return (
                    <div className="module-item">
                      <Collapse defaultActiveKey={[]} ghost>
                        <Panel
                          header={
                            <>
                              <span className="item-icon">{module.icon}</span>
                              <span className="item-name">{module.name}</span>
                            </>
                          }
                          key="1"
                        >
                          <div className="list-value-item">
                            {_.map(values, (value, idx: number) => (
                              <DragableRow
                                key={idx}
                                index={idx}
                                moveRow={(oldIdx, newIdx) =>
                                  swapItems(module.key, oldIdx, newIdx)
                                }
                              >
                                <div
                                  onClick={() => {
                                    setChildrenDrawer(module.key);
                                    updateCurrentContent({
                                      ...value,
                                      dataIndex: idx,
                                    });
                                  }}
                                >
                                  {`${idx + 1}. ${Object.values(
                                    value || {}
                                  ).join(' - ')}`}
                                </div>
                                <DeleteFilled
                                  onClick={() => {
                                    Modal.confirm({
                                      content: '确认删除',
                                      onOk: () => deleteItem(module.key, idx),
                                    });
                                  }}
                                />
                              </DragableRow>
                            ))}
                            <div
                              className="btn-append"
                              onClick={() => {
                                setChildrenDrawer(module.key);
                                updateCurrentContent(null);
                              }}
                            >
                              继续添加
                            </div>
                          </div>
                        </Panel>
                      </Collapse>
                    </div>
                  );
                }
                return (
                  <div className="module-item">
                    <Collapse
                      defaultActiveKey={[]}
                      ghost
                      expandIcon={() => (
                        <span
                          style={{ display: 'inline-block', width: '12px' }}
                        />
                      )}
                    >
                      <Panel
                        header={
                          <span
                            onClick={() => {
                              updateCurrentContent(
                                _.get(props.value, module.key)
                              );
                              setChildrenDrawer(module.key);
                            }}
                          >
                            <span className="item-icon">{module.icon}</span>
                            <span className="item-name">{module.name}</span>
                          </span>
                        }
                        key="1"
                        className="no-content-panel"
                      />
                    </Collapse>
                  </div>
                );
              })}
            </div>
            <AntdDrawer
              title={MODULES.find(m => m.key === childrenDrawer)?.name}
              width={450}
              onClose={() => setChildrenDrawer(null)}
              visible={!!childrenDrawer}
            >
              <FormCreator
                config={CONTENT_OF_MODULE[childrenDrawer]}
                value={currentContent}
                onChange={v => {
                  if (_.endsWith(childrenDrawer, 'List')) {
                    const newValue = _.get(props.value, childrenDrawer, []);
                    if (currentContent) {
                      newValue[currentContent.dataIndex] = _.merge(
                        {},
                        currentContent,
                        v
                      );
                    } else {
                      newValue.push(v);
                    }
                    props.onValueChange({
                      [childrenDrawer]: newValue,
                    });
                  } else {
                    props.onValueChange({
                      [childrenDrawer]: _.merge({}, currentContent, v),
                    });
                  }

                  // 关闭抽屉
                  setChildrenDrawer(null);
                  // 清空当前选中内容
                  updateCurrentContent(null);
                }}
              />
            </AntdDrawer>
          </DndProvider>
        ) : (
          // 简单做
          <div className="theme-config">
            <FormCreator
              config={[
                { type: 'input', attributeId: 'color', displayName: '主题色' },
                {
                  type: 'input',
                  attributeId: 'tagColor',
                  displayName: 'tag 标签色',
                },
              ]}
              value={props.theme}
              onChange={v => {
                props.onThemeChange(v);
              }}
            />
          </div>
        )}
      </AntdDrawer>
    </>
  );
};
