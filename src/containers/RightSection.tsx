import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import ResumeOne from '../components/resumeOne';
import ResumeTwo from '../components/resumeTwo';
import { deleteInfo, adjustInfo } from '../actions';

class RightSection extends Component {
  constructor(props) {
    super(props);
  }

  getChildContext() {
    return {
      deleteInfo: payload => {
        this.props.deleteInfo(payload);
        // dispatch(deleteInfo(payload));
      },
      adjustInfo: payload => {
        this.props.adjustInfo(payload);
      },
    };
  }
  render() {
    const templateId = this.props.templateId;
    return (
      <div className="rightSection">
        {(templateId == 1 && (
          <ResumeOne
            {...this.props.resumeInfo}
            styleColor={this.props.styleColor}
          />
        )) ||
          (templateId == 2 && (
            <ResumeTwo
              {...this.props.resumeInfo}
              styleColor={this.props.styleColor}
            />
          ))}
      </div>
    );
  }
}

RightSection.childContextTypes = {
  deleteInfo: PropTypes.func,
  adjustInfo: PropTypes.func,
};

const mapStateToProps = (state, ownProps) => {
  return {
    resumeInfo: state.resumeInfo,
    styleColor: state.styleColor,
    templateId: state.templateId,
  };
};
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    deleteInfo: payload => {
      dispatch(deleteInfo(payload));
    },
    adjustInfo: payload => {
      dispatch(adjustInfo(payload));
    },
  };
};

RightSection = connect(mapStateToProps, mapDispatchToProps)(RightSection);

export default RightSection;
