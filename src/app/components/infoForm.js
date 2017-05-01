import React,{ Component } from 'react';
import _ from 'lodash';
import PropTypes from 'prop-types';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';
import FontIcon from 'material-ui/FontIcon';

const styles = {
   button:{ margin: 12 }
};
class ButtonGroup extends Component{
  constructor(props){
    super(props);
  }
  render(){
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
			<RaisedButton
				onClick={this.props.handleAdd}
				label="新添"
				labelPosition="before"
				style={styles.button}
				icon={<FontIcon className="fa fa-plus-square" />}
			/>	
		</div>
    )
  }
}

class InfoForm extends Component{
	constructor(props){
		super(props);

		this.inputs = [];
		this.handleChange = this.handleChange.bind(this);
		// this.handleSave = this.handleSave.bind(this);
		this.handleAdd = this.handleAdd.bind(this);
		this.handleClear = this.handleClear.bind(this);
	}

	getStyle(){
		return {
			display:'block'
		}
	}

	handleChange(e){
		var payload = null,name = e.target.name,value = e.target.value;
		if(name){
			payload = Object.assign({},payload,{[name]:value})        
		}else{
			payload = value;
		}
		const type = this.props.actionType;
		this.props.setFormInfo({type,payload});
	}
	handleAdd(){

	}
	handleSave(){

	}
	handleClear(){
		let type = 'CLEAR_'+this.props.actionType,
				formSchema = this.props.formSchema,
				payload = null;	
		formSchema.map(fieldSchema => {
        var name = fieldSchema["name"];			
				payload = Object.assign({},payload,{[name]:''});
		})
		this.props.clearFormInfo({type,payload});
	}

	// NOTE: TextFiled 的key很重要，影响是否重新渲染，不要选择index值
	renderField(){
     const style = this.getStyle(),
          formDefaultValue = this.props.formDefaultValue;         
      return (
        this.props.formSchema && this.props.formSchema.map((fieldSchema,index) => {
              var name = fieldSchema["name"];
              var defaultValue = formDefaultValue?formDefaultValue[name]:'';
              fieldSchema = {...fieldSchema,name,defaultValue};
              return  <TextField key={'text-field-'+name} style={style} 
                         {...fieldSchema} onChange={this.handleChange} 
                       />
            })
          
      )
   }
   render(){
     return (
       <div style={{maxWidth:'380px',padding:'0 42px'}}>
          {
            this.renderField()
          }
         <ButtonGroup 
        	// handleAdd = { ()=>{console.log("add")} }
					handleSave = { ()=>{} }
					handleClear = { this.handleClear }
			/>
      </div>
     )
   }
}

InfoForm.propsTypes = {
  formSchema: PropTypes.array
};

export default InfoForm;