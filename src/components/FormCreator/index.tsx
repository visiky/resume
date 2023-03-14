import React, { useEffect, useState } from 'react';
import { Form, Input, InputNumber, Button, Checkbox, Select } from 'antd';
import { FormItemProps } from 'antd/lib/form';
import _ from 'lodash-es';
import { ColorPicker } from './ColorPicker';
import { FormattedMessage } from 'react-intl';

type Props = {
  /** 表单配置 */
  config: Array<{
    type: string /** 组件类型 */;
    attributeId: string;
    displayName: string;
    formItemProps?: FormItemProps;
    cfg?: {
      [k: string]: any /**其它和组件本身有关的配置 */;
    };
  }>;
  /** 表单已配置内容 */
  value: {
    [key: string]: any;
  };
  onChange: (v: any) => void;
  /** 列表型内容 */
  isList: boolean;
};

const FormItemComponentMap = (type: string) => (
  props: { value: any; onChange?: (v) => void } = { value: null }
) => {
  switch (type) {
    case 'checkbox':
      return <Checkbox {...props} />;
    case 'select':
      return <Select {...props} />;
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

  const handleChange = (values: any) => {
    if ('edu_time' in values && typeof values.edu_time === 'string') {
      values.edu_time = values.edu_time.split(',');
    }
    if ('work_time' in values) {
      values.work_time = values.work_time.split(',');
    }
    props.onChange(values);
  };
  const formProps = {
    [props.isList ? 'onFinish' : 'onValuesChange']: handleChange,
  };

  return (
    <div>
      <Form
        labelCol={{ span: 6 }}
        initialValues={props.value}
        fields={fields}
        {...formProps}
      >
        {_.map(props.config, c => {
          return (
            <Form.Item
              key={c.attributeId}
              label={c.displayName}
              wrapperCol={c.displayName ? { span: 18 } : { span: 24 }}
              name={c.attributeId}
              {...(c.formItemProps || {})}
            >
              {FormItemComponentMap(c.type)({
                ...(c.cfg || {}),
                value: _.get(props.value, [c.attributeId]),
              })}
            </Form.Item>
          );
        })}
        {props.isList && (
          <Form.Item wrapperCol={{ offset: 6 }}>
            <Button type="primary" htmlType="submit">
              <FormattedMessage id="提交" />
            </Button>
          </Form.Item>
        )}
      </Form>
    </div>
  );
};
