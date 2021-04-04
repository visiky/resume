import React from 'react';
import Drawer from 'material-ui/Drawer';
import MenuItem from 'material-ui/MenuItem';
import RaisedButton from 'material-ui/RaisedButton';

class SiderBarDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false, styleColor: '#273f75' };
    this.handleToggle = this.handleToggle.bind(this);
    this.handleChangeStyleColor = this.handleChangeStyleColor.bind(this);
  }

  handleToggle() {
    this.setState({ open: !this.state.open });
  }

  handleClose(index) {
    this.setState({ open: false });
    this.props.stepMove(index);
  }

  handleChangeStyleColor(color) {
    this.setState({ styleColor: color });
    this.props.setStyleColor(color);
  }

  handleChangeTemplate(templateId) {
    this.props.setTemplate(templateId);
  }
  render() {
    return (
      <div className="sider-bar-drawer">
        <RaisedButton label="打开设置菜单" onClick={this.handleToggle} />
        <Drawer
          docked={false}
          width={200}
          open={this.state.open}
          onRequestChange={open => this.setState({ open })}
        >
          <MenuItem onClick={this.handleClose.bind(this, 0)}>
            基本信息
          </MenuItem>
          <MenuItem onClick={this.handleClose.bind(this, 1)}>
            工作经历
          </MenuItem>
          <MenuItem onClick={this.handleClose.bind(this, 2)}>
            技能证书
          </MenuItem>
          <MenuItem onClick={this.handleClose.bind(this, 3)}>
            自我评价
          </MenuItem>
          <MenuItem>选择颜色风格</MenuItem>
          <div className="color-group" style={{ padding: '5px 16px' }}>
            <span
              onClick={this.handleChangeStyleColor.bind(this, '#273f75')}
              style={{ background: '#273f75' }}
            ></span>
            <span
              onClick={this.handleChangeStyleColor.bind(this, '#2B455F')}
              style={{ background: '#2B455F' }}
            ></span>
            <span
              onClick={this.handleChangeStyleColor.bind(this, '#398fe6')}
              style={{ background: '#398fe6' }}
            ></span>
            <span
              onClick={this.handleChangeStyleColor.bind(this, '#F79B13')}
              style={{ background: '#F79B13' }}
            ></span>
            <span
              onClick={this.handleChangeStyleColor.bind(this, '#E32914')}
              style={{ background: '#E32914' }}
            ></span>
          </div>
        </Drawer>
      </div>
    );
  }
}
export default SiderBarDrawer;
