import React from 'react'
import { Route, Link, NavLink } from 'react-router-dom'

const NavItem = ({ label, to }) => {
  return (
    <Route
      path={to}
      exact={true}
      children={({ match }) => (
        <li className={`nav-item ${match ? "active" : ""}`}>
          <Link to={to} className="nav-link">{label}</Link>
        </li>
      )}
    />
  )
}

export default ({ children }) => {
  return (
    <div className="container-fluid">
      <nav className="navbar navbar-expand-lg fixed-top navbar-light bg-light">
        <NavLink exact to="/" className="navbar-brand" activeClassName="active">Nano Node Monitor</NavLink>

        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <NavItem label="Accounts" to="/accounts" />
            <NavItem label="System Info" to="/system" />
            <NavItem label="Logs" to="/logs" />
          </ul>
        </div>
      </nav>
    </div>
  )
}
