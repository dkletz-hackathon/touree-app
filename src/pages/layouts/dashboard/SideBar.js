import React from 'react'
import { Link, useRouteMatch } from 'react-router-dom'

import sideBarRoutes from './sideBarRoutes'
import logo from '../../../assets/logo-studio.png'

export default function SideBar() {
  let match = useRouteMatch()
  let [routes] = React.useState(sideBarRoutes)

  let isActive = route => {
    if (route.main) return match.url === route.path
    return match.url.startsWith(route.path)
  }

  return (
    <div className="dashboard-sidebar">
      <img src={logo} alt="logo" className="dashboard-logo" />
      <Link to="/" className="dashboard-back">
        <span className="material-icons">keyboard_backspace</span>
        <p>Back to Homepage</p>
      </Link>
      {routes.map(route => {
        return (
          <React.Fragment key={route.section}>
            <p className="dashboard-sidebar-section">{route.section}</p>
            {route.items.map(item => {
              let activeClass = `${isActive(item) ? 'active' : ''}`
              return (
                <Link
                  to={item.path}
                  key={item.title}
                  className={`dashboard-sidebar-item ${activeClass}`}
                >
                  <span className="material-icons">{item.icon}</span>
                  <p>{item.title}</p>
                </Link>
              )
            })}
          </React.Fragment>
        )
      })}
    </div>
  )
}
