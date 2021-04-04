import React, { Component } from 'react';
import { connect } from 'react-redux';
import _ from 'lodash';
import SiderBarDrawer from '../components/common/SiderBarDrawer';
import InfoForm from '../components/common/InfoForm';
import {
  setFormSchema,
  setStyleColor,
  clearSet,
  newSet,
  setTemplate,
} from '../actions';
import { actionTypeMapProp, actionTypeMapSetAction } from '@/constants';

class LeftSection extends Component {
  constructor() {
    super();
  }
  render() {
    return (
      <div className="leftSection">
        <SiderBarDrawer
          stepMove={index => {
            this.props.setFormSchema(index);
          }}
          setStyleColor={color => {
            this.props.setStyleColor(color);
          }}
          setTemplate={this.props.setTemplate}
        />
        <InfoForm {...this.props} />
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {
  const formSchemaProp = actionTypeMapProp[state.actionType];
  const resumeInfo = state.resumeInfo;
  return {
    formSchema: state.formSchema,
    formDefaultValue: _.isArray(resumeInfo[formSchemaProp])
      ? resumeInfo[formSchemaProp][resumeInfo[formSchemaProp].length - 1]
      : resumeInfo[formSchemaProp],
    actionType: state.actionType,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    setFormSchema: index => {
      dispatch(setFormSchema(index));
    },
    setStyleColor: color => {
      dispatch(setStyleColor(color));
    },
    setTemplate: index => {
      dispatch(setTemplate(index));
    },
    setFormInfo: action => {
      const actionType = action.type;
      if (actionType) {
        // 子组件只关注 setFormInfo ，父组件具体 调度action
        dispatch(actionTypeMapSetAction[actionType](action.payload));
      }
    },
    newSetFormInfo: action => {
      // 子组件只关注 setFormInfo ，父组件具体 调度action
      dispatch(newSet(action.payload));
    },
    clearFormInfo: action => {
      dispatch(clearSet(action.payload));
    },
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LeftSection);
