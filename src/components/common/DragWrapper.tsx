import React, { Component, PropTypes } from 'react';
import _ from 'lodash';

/**
 *
 *
 * @param {any} WrappedComponent
 * @returns {ReactCompoment} - 包装了拖拽功能的新组件，需要传入 drag相关处理事件
 */

function DragWrapper(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props);
    }

    handleDragStart(index, event) {
      event.target.style.visibility = '.5';
      event.dataTransfer.setData('text/plain', index);
    }

    handleDragOver(event) {
      // Prevent default to allow drop . [MDN](https://developer.mozilla.org/en-US/docs/Web/Events/dragover)
      event.preventDefault();
    }

    handleDrop(index, event) {
      let fromIndex = event.dataTransfer.getData('text/plain'),
        toIndex = index;
      this.props.moveItem(fromIndex, toIndex);
    }
    render() {
      const index = this.props.index;
      const passProps = _.omit(this.props, 'moveItem');
      return (
        <div
          className="drag-item"
          draggable={true}
          onDrop={this.handleDrop.bind(this, index)}
          onDragStart={this.handleDragStart.bind(this, index)}
          onDragOver={this.handleDragOver.bind(this)}
        >
          <WrappedComponent {...passProps} />
        </div>
      );
    }
  };
}

export default DragWrapper;
