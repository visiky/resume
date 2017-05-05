import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux'
// import ResumeOne from '../components/resumeOne';
import ResumeTwo from '../components/resumeTwo';
import { deleteInfo, adjustInfo } from '../actions';

class RightSection extends Component {
    constructor() {
        super();
    }

    getChildContext(){
        return {
            deleteInfo : (payload) => {
                this.props.deleteInfo(payload);
            },
            adjustInfo : (payload) => {
                this.props.adjustInfo(payload);
            }
        }
    }
    render() {
        return (
            <div className="rightSection">
                <ResumeTwo {...this.props.resumeInfo} styleColor={this.props.styleColor}/>
            </div>
        )
    }
}

RightSection.childContextTypes = {
    deleteInfo: PropTypes.func,
    adjustInfo: PropTypes.func
}

const mapStateToProps = (state, ownProps) => {
    return {resumeInfo: state.resumeInfo, styleColor: state.styleColor}
}
const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        deleteInfo: (payload) => {
            dispatch(deleteInfo(payload));
        },
        adjustInfo: (payload) => {
            dispatch(adjustInfo(payload));
        }
    }
}

RightSection = connect(mapStateToProps, mapDispatchToProps)(RightSection)

export default RightSection;
