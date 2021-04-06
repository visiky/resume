import React, { Component } from 'react';
import PropTypes from 'prop-types';
import showConfirm from '../../common/Confirm';
import DragWrapper from '../../common/DragWrapper';
import colorMap from '../../../constants/colorMap';
import { Tooltip } from 'antd';

class ExperienceItem extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    const { styleColor, index, experienceType, imgUrl, experienceDescription } =
      this.props || {};
    return experienceType ? (
      <Tooltip placement="right" title={'右键删除,拖拽移动'}>
        <div
          className="section-list-item"
          onContextMenu={e => this.props.handleContextMenu(index, e)}
          title="右键删除"
        >
          {(url => {
            if (url)
              return (
                <img
                  src={url}
                  alt="项目介绍"
                  width="30px"
                  height="30px"
                  style={{ marginRight: '8px' }}
                />
              );
          })(imgUrl)}
          <div>
            <h3
              className="section-list-item__title"
              style={{ borderLeftColor: styleColor ? styleColor : 'orange' }}
            >
              {experienceType}
            </h3>
            <div className="section-list-item__content">
              <p style={{ textIndent: '18px' }}>{experienceDescription}</p>
            </div>
          </div>
        </div>
      </Tooltip>
    ) : null;
  }
}

class ExperienceBox extends Component {
  constructor(props) {
    super(props);
    this.moveItem = this.moveItem.bind(this);
    this.handleContextMenu = this.handleContextMenu.bind(this);
  }
  handleContextMenu(index, e) {
    e.preventDefault();
    showConfirm(null, '确定删除？').then(
      message => {
        let nextExperiences = this.props.experiences;
        nextExperiences.splice(index, 1);
        this.context.deleteInfo({ experiences: nextExperiences });
      },
      message => {}
    );
  }
  moveItem(fromIndex, toIndex) {
    let nextExperiences = this.props.experiences;
    [nextExperiences[fromIndex], nextExperiences[toIndex]] = [
      nextExperiences[toIndex],
      nextExperiences[fromIndex],
    ];
    this.context.adjustInfo({ experiences: nextExperiences });
  }
  render() {
    const styleColor = colorMap[this.props.styleColor],
      experiences = this.props.experiences,
      DragItem = DragWrapper(ExperienceItem);
    return (
      <div className="experience-box">
        {experiences.map((experience, index) => {
          return (
            <DragItem
              key={'experience-' + index}
              {...experience}
              index={index}
              styleColor={styleColor}
              handleContextMenu={this.handleContextMenu}
              moveItem={this.moveItem}
            />
          );
        })}
      </div>
    );
  }
}

ExperienceBox.contextTypes = {
  deleteInfo: PropTypes.func,
  adjustInfo: PropTypes.func,
};

export default ExperienceBox;
