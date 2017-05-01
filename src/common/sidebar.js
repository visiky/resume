import React,{ Component } from 'react';
import Drawer from 'material-ui/Drawer';
import MyStepper from './stepper';
import StyleList from '../components/styleList';
import InfoForm from '../components/infoForm';

export default class SideBar extends Component {

  constructor(props) {
    super(props);
    this.state = {open: false};
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
      this.setState({open: !this.state.open});
  }

  render() {
    return (
      <div>
        <MyStepper />
        <TextFieldExampleSimple />
        <button onClick={this.handleToggle}>打开样式选择列表</button>
        <Drawer width={400} openSecondary={true} open={this.state.open} >
           <h2>请选择简历样式</h2>
           <StyleList />
        </Drawer>
      </div>
    );
  }
}