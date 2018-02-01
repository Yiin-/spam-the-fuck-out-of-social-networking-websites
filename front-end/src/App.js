import React, { Component } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import Overview from '@/scenes/Overview'
import Login from '@/scenes/Login'

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route exact path="/" component={Overview} />
          <Route exact path="/" component={Login} />
        </div>
      </Router>
    )
  }
}

export default App
