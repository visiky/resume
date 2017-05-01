import React,{Component} from 'react';
import { connect } from 'react-redux'
import SetInfoStepper from '../components/setInfoStepper';
import InfoForm from '../components/infoForm';
import { setBasicInfo, setExperience, setFormSchema, setSelfEvaluation, setSkill }from '../actions';
import { actionTypeMapProp, actionTypeMapSetAction, actionTypeMapClearAction } from '../constants';
import { isArray } from '../utils/filter';

class LeftSection extends Component{
    constructor(){
        super();
    }
    render(){
        return (
            <div className="leftSection">
                <SetInfoStepper stepMove={(index)=>{this.props.setFormSchema(index)}}/>
                <InfoForm {...this.props}/>
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) => {
    const formSchemaProp = actionTypeMapProp[state.actionType];
    return {
        formSchema: state.formSchema,
        formDefaultValue: isArray(state[formSchemaProp])?state[formSchemaProp][state[formSchemaProp].length-1]:state[formSchemaProp],
        actionType: state.actionType
    }
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
        setFormSchema: (index) => {
            dispatch(setFormSchema(index))
        },
        setFormInfo: (action) =>{
            const actionType = action.type;  
            if(actionType){
                dispatch(actionTypeMapSetAction[actionType](action.payload));
            }
        },
        clearFormInfo: (action) =>{
            const actionType = action.type;              
            if(actionType){
                dispatch(actionTypeMapClearAction[actionType](action.payload));
            }
        }
    }
}

LeftSection = connect(
        mapStateToProps,
        mapDispatchToProps
    )(LeftSection)

    
export default LeftSection;



