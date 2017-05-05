import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import BasicInfoBox from './basicInfoBox';
import MainInfoBox from './mainInfoBox';

import "./index.less";

class ResumeTwo extends Component{

    constructor(props){
        super(props);

    }

    shouldComponentUpdate(nextProps){
        return true;
    }

    render(){
        const { basicInfo, styleColor } = this.props;
        const mainInfo = _.omit(this.props,"basicInfo");
        return (
            <div className="resume-two">
                <BasicInfoBox basicInfo = { basicInfo } styleColor = { styleColor }/>
                <MainInfoBox { ...mainInfo } styleColor = { styleColor }/>
            </div>
        )
    }
}
export default ResumeTwo;