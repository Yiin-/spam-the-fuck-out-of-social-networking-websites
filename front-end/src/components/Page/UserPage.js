import React, { Component } from 'react'
import Page from './Page'

const UserPage = (WrappedComponent) => class UserPage extends Component {
  render() {
    // TODO: Check if authenticated

    return (
      <Page>
        <WrappedComponent {...this.props } />
      </Page>
    )
  }
}

export default UserPage
