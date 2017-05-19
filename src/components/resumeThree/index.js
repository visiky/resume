import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import _ from 'lodash';


import "./index.less";

class ResumeThree extends Component {

	constructor(props, context) {
		super(props, context);
		this.state = {
			isPreviewStyle: context.isPreviewStyle
		}
	}

	shouldComponentUpdate(nextProps) {
		return true;
	}

	render() {
		const {basicInfo, styleColor} = this.props;
		const mainInfo = _.omit(this.props, "basicInfo");

		return (
			<div className="resume-three">
				
			</div>
		)
	}
}

ResumeThree.contextTypes = {
	isPreviewStyle: PropTypes.object
}
export default ResumeThree;