import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import _ from 'lodash';
import { ColorPicker } from './ColorPicker';

type Props = {
  /** 表单配置 */
  config: Array<{
    type: string /** 组件类型 */;
    attributeId: string;
    displayName: string;
    rules?: FormItemProps['rules'];
    cfg?: {
      [k: string]: any /**其它和组件本身有关的配置 */;
    };
  }>;
  /** 表单已配置内容 */
  value: {
    [key: string]: any;
  };
  onChange: (v: any) => void;
};

const FormItemComponentMap = (type: string) => (
  props: { value: any; onChange?: (v) => void } = { value: null }
) => {
  switch (type) {
    case 'input':
      return <Input {...props} />;
    case 'number':
      return <InputNumber {...props} />;
    case 'textArea':
      return <Input.TextArea {...props} />;
    case 'color-picker':
      return <ColorPicker {...props} />;
    default:
      return <Input />;
  }
};

export const FormCreator: React.FC<Props> = props => {
  const [fields, setFields] = useState([]);

  useEffect(() => {
    const datas = Object.keys(props.value || {}).map(d => ({
      name: [d],
      value: props.value[d],
    }));
    setFields(datas);
  }, [props.value]);

  const onFinish = (values: any) => {
    props.onChange(values);
  };
  return (
    <div>
      <Form
        labelCol={{ span: 6 }}
        initialValues={props.value}
        fields={fields}
        onFinish={onFinish}
      >
        {_.map(props.config, c => {
          return (
            <Form.Item
              key={c.attributeId}
              label={c.displayName}
              wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
              name={c.attributeId}
              rules={c.rules}
            >
              {FormItemComponentMap(c.type)({
                ...(c.cfg || {}),
                value: props.value?.[c.attributeId],
              })}
            </Form.Item>
          );
        })}
        <Form.Item wrapperCol={{ offset: 6 }}>
          <Button type="primary" htmlType="submit">
            提交
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
