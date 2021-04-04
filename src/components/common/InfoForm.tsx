import React, { Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
  button: { margin: 5 },
};
class ButtonGroup extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    //   const saveBtn = <RaisedButton
    // 					onClick={this.props.handleSave}
    // 					label="保存"
    // 					labelPosition="before"
    // 					style={styles.button}
    // 					icon={<FontIcon className="fa fa-save" />}
    // 				/>
    return (
      <div>
        <RaisedButton
          onClick={this.props.handleClear}
          label="清空"
          labelPosition="before"
          style={styles.button}
          icon={<FontIcon className="fa fa-save" />}
        />
        {this.props.actionType !== 'SET_BASIC_INFO' && (
          <RaisedButton
            onClick={this.props.handleAdd}
            label="新添"
            labelPosition="before"
            style={styles.button}
            icon={<FontIcon className="fa fa-plus-square" />}
          />
        )}
      </div>
    );
  }
}

class InfoForm extends Component {
  constructor(props) {
    super(props);

    this.handleChange = this.handleChange.bind(this);
    // this.handleSave = this.handleSave.bind(this);
    this.handleAdd = this.handleAdd.bind(this);
    this.handleClear = this.handleClear.bind(this);
    this.clearInputs = this.clearInputs.bind(this);
  }

  getStyle() {
    return {
      display: 'block',
      width: '100%',
    };
  }

  handleChange(e) {
    var payload = null,
      name = e.target.name,
      value = e.target.value;
    if (name) {
      payload = Object.assign({}, payload, { [name]: value });
    } else {
      payload = value;
    }
    const type = this.props.actionType;
    this.props.setFormInfo({ type, payload });
  }
  handleAdd() {
    let type = 'NEW_SET', // 统一
      payload = this.props.actionType;
    this.props.newSetFormInfo({ type, payload });
    this.clearInputs();
  }
  clearInputs() {
    for (let comp in this.refs) {
      if (!this.refs.hasOwnProperty(comp)) return;
      let textFieldComp = this.refs[comp];
      let $input = textFieldComp.input;
      if ($input.nodeName !== 'INPUT') {
        $input = $input.refs.input;
      }
      $input.value = null;
      textFieldComp.state.hasValue = false;
    }
  }
  handleClear() {
    let type = 'CLEAR_SET', // 统一
      payload = null,
      actionType = this.props.actionType,
      content = this.props.formDefaultValue;

    // 此处修复上方，修改状态后 无法实时更新的bug
    content = null;
    payload = { actionType, content };

    this.props.clearFormInfo({ type, payload });
    this.clearInputs();
  }

  // NOTE: TextFiled 的key很重要，影响是否重新渲染，不要选择index值
  renderField() {
    const style = this.getStyle(),
      formDefaultValue = this.props.formDefaultValue;
    return (
      this.props.formSchema &&
      this.props.formSchema.map((fieldSchema, index) => {
        var name = fieldSchema['name'] || '';
        var defaultValue =
          (formDefaultValue && formDefaultValue[name]) ||
          (_.isArray(formDefaultValue) && formDefaultValue.join(',')) ||
          formDefaultValue;
        defaultValue = !_.isObject(defaultValue) ? defaultValue : '';
        fieldSchema = { ...fieldSchema, name, defaultValue };
        return (
          <TextField
            key={'text-field-' + name}
            style={style}
            {...fieldSchema}
            onChange={this.handleChange}
            ref={'text-field-' + name}
          />
        );
      })
    );
  }
  render() {
    return (
      <div style={{ padding: '0 10px' }}>
        {this.renderField()}
        <ButtonGroup
          actionType={this.props.actionType}
          handleAdd={this.handleAdd}
          // handleSave = { ()=>{} }
          handleClear={this.handleClear}
        />
      </div>
    );
  }
}

InfoForm.propsTypes = {
  formSchema: PropTypes.array,
};

export default InfoForm;
