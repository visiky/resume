import React, { Component, PropTypes } from 'react'

function BoxWrapper(WrappedComponent) {
  return class extends Component {
    constructor(props) {
      super(props)
    }
    render() {
      const id = this.props.id,
        title = this.props.title,
        subtitle = this.props.subtitle
      const passProps = _.omit(this.props, 'id', 'title')
      return (
        <section id={id}>
          <div className="section-header">
            <img
              src={'/images/' + id + '.png'}
              alt=""
              width="26px"
              height="26px"
            />
            <h1 style={{ background: this.props.styleColor }}>{title}</h1>
          </div>
          <div className="section-body">
            <WrappedComponent {...passProps} />
          </div>
        </section>
      )
    }
  }
}

export default BoxWrapper
