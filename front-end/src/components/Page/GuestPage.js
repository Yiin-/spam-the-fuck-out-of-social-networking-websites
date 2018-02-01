import React, { Component } from 'react'
import Page from './Page'

const GuestPage = (WrappedComponent) => class GuestPage extends Component {
  render() {
    // TODO: Check if authenticated

    let isAuthenticated = true

    if (isAuthenticated) {
      return null
    }

    return (
      <Page>
        <WrappedComponent {...this.props } />
      </Page>
    )
  }
}

export default GuestPage
