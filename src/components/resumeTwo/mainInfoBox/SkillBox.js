import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import showConfirm from 'components/common/Confirm';
import DragWrapper from 'components/common/DragWrapper';
import colorMap from 'constants/colorMap';
import { Tooltip } from 'antd';

const statGroup = (number) =>{
    return (
        <span className="star-group">
            <i className="fa fa-star" style={{ color:(number>20)?'#ffc300':'#fff' }}></i>
            <i className="fa fa-star" style={{ color:(number>40)?'#ffc300':'#fff' }}></i>
            <i className="fa fa-star" style={{ color:(number>60)?'#ffc300':'#fff' }}></i>
            <i className="fa fa-star" style={{ color:(number>=80)?'#ffc300':'#fff' }}></i>
            <i className="fa fa-star" style={{ color:(number>=100)?'#ffc300':'#fff' }}></i>
        </span>
    )
}
class SkillItem extends Component {
    constructor(props){
        super(props);

    }
    render(){
        const {styleColor, index, skillLevel, skillDescription1, skillDescription2, skillDescription3, skillDescription4, skillType} = this.props ||  {};
        return (
            skillType ? 
            <Tooltip placement="right" title={"右键删除,拖拽移动"}>
                <div className="section-list-item" onContextMenu={(e) => this.props.handleContextMenu(index,e)}>
                    <h3 className="section-list-item__title"  style={{borderLeftColor:styleColor?styleColor:"orange"}}>
                        { skillType } {statGroup(skillLevel)}
                    </h3>
                    <div className="section-list-item__content">
                        { skillDescription1 && <p><i className="fa fa-check-circle-o" style={{marginRight:"5px",color:styleColor?styleColor:"orange"}}></i>{skillDescription1}</p> }
                        { skillDescription2 && <p><i className="fa fa-check-circle-o" style={{marginRight:"5px",color:styleColor?styleColor:"orange"}}></i>{skillDescription2}</p> }
                        { skillDescription3 && <p><i className="fa fa-check-circle-o" style={{marginRight:"5px",color:styleColor?styleColor:"orange"}}></i>{skillDescription3}</p> }
                        { skillDescription4 && <p><i className="fa fa-check-circle-o" style={{marginRight:"5px",color:styleColor?styleColor:"orange"}}></i>{skillDescription4}</p> }    
                    </div>
                </div>
            </Tooltip> : null
        )
    }
}


class SkillBox extends Component{

    constructor(props){
        super(props);
        this.moveItem = this.moveItem.bind(this);
        this.handleContextMenu = this.handleContextMenu.bind(this);
    }

   handleContextMenu(index,e){
        e.preventDefault();
        showConfirm(null,'确定删除？').then((message)=>{
            let nextSkills = this.props.skills;
        nextSkills.splice(index,1);
        this.context.deleteInfo({skills:nextSkills});
        },(message)=>{
            
        });
    }
    moveItem(fromIndex,toIndex){
        let nextSkills = this.props.skills;
        [ nextSkills[fromIndex], nextSkills[toIndex] ] = [ nextSkills[toIndex], nextSkills[fromIndex] ];
        this.context.adjustInfo({skills: nextSkills });

    }
    render(){
         const styleColor = colorMap[this.props.styleColor],
            skills = this.props.skills,
            DragItem = DragWrapper(SkillItem);
        return(
            <div className = "skill-box">
                {
                    skills.map((skill, index) => {
                        return <DragItem key={'skill-' + index } { ...skill } styleColor = {styleColor} index = {index} handleContextMenu = { this.handleContextMenu } moveItem = {this.moveItem}/>
                    })
                }
            </div>
        )
    }
}
SkillBox.contextTypes = {
	deleteInfo: PropTypes.func,
    adjustInfo: PropTypes.func
}
export default SkillBox;