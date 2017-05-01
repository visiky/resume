import React,{Component} from 'react';
import { connect } from 'react-redux'
import ResumeOne from '../components/resumeOne';
import { setBasicInfo, setExperience, setFormSchema, setSelfEvaluation, setSkill }from '../actions';
import { actionTypeMapProp, actionTypeMapAction } from '../constants';


class RightSection extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="rightSection">
                <ResumeOne {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    return state;
}



RightSection = connect(
        mapStateToProps
    )(RightSection)

    
export default RightSection;



