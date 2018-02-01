import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Page extends Component {
  propTypes = {
    children: PropTypes.node
  }

  render() {
    return (
      <div>
        { this.props.children }
      </div>
    )
  }
}

export default Page
