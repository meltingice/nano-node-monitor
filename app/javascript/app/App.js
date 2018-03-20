import React from 'react'
import { BrowserRouter as Router } from 'react-router-dom'

import Layout from './Layout'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>

        </Layout>
      </Router>
    )
  }
}
