import React from 'react';
import {
  Step,
  Stepper,
  StepButton,
} from 'material-ui/Stepper';


class SetInfoStepper extends React.Component {

  constructor(){
    super();
    this.state = {
      stepIndex: 0,
      finishedIndex: 3
    };
  }
  
  handleClick(index){
    this.setState({stepIndex: index});
    this.props.stepMove(index);
  }


  render() {
    const {stepIndex} = this.state;

    return (
      <div style={{maxWidth: 380, maxHeight: 400,display:'inlineBlock'}}>
        <Stepper activeStep={stepIndex}>
          <Step disabled={false}>
            <StepButton onClick={this.handleClick.bind(this,0)}>
              基本信息
            </StepButton>
          </Step>
          <Step disabled={false}>
            <StepButton onClick={this.handleClick.bind(this,1)}>
              工作经历
            </StepButton>
          </Step>
          <Step disabled={false}>
            <StepButton onClick={this.handleClick.bind(this,2)}>
              技能证书
            </StepButton>
          </Step>
          <Step disabled={false}>          
            <StepButton onClick={this.handleClick.bind(this,3)}>
              自我评价
            </StepButton>
          </Step>
        </Stepper>
      </div> 
    );
  }
}

export default SetInfoStepper;