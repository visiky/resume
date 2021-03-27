import React, { Component } from 'react'
import RaisedButton from 'material-ui/RaisedButton'
import FontIcon from 'material-ui/FontIcon'

class ButtonGroup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isPreview: false,
    }
  }
  componentWillReceiveProps(nextProps) {
    this.setState({
      isPreview: nextProps.isPreview,
    })
  }
  render() {
    const styles = {
      button: {
        margin: '5px',
      },
    }
    return (
      <div className="buttonGroupSection">
        {!this.state.isPreview && (
          <RaisedButton
            onClick={this.props.handlePreview}
            label="打印预览"
            labelPosition="before"
            style={styles.button}
            icon={<FontIcon className="fa fa-save" />}
          />
        )}
        {this.state.isPreview && (
          <div>
            <RaisedButton
              onClick={this.props.handlePrint}
              label="确定"
              labelPosition="before"
              style={styles.button}
              icon={<FontIcon className="fa fa-plus-square" />}
            />
            <RaisedButton
              onClick={this.props.handleCanclePreview}
              label="取消"
              labelPosition="before"
              style={styles.button}
              icon={<FontIcon className="fa fa-plus-square" />}
            />
          </div>
        )}
      </div>
    )
  }
}

export default ButtonGroup
