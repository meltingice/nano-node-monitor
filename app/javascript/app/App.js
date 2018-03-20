import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Layout from './Layout'
import NodeInfo from './views/NodeInfo'
import Accounts from './views/Accounts'
import Logs from './views/Logs'

export default class App extends React.Component {
  render() {
    return (
      <Router>
        <Layout>
          <Route exact path="/" component={NodeInfo} />
          <Route exact path="/accounts" component={Accounts} />
          <Route exact path="/logs" component={Logs} />
        </Layout>
      </Router>
    )
  }
}
