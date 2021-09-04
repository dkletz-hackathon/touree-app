import React from 'react'
import { Switch, Route, useRouteMatch, useLocation, withRouter } from 'react-router-dom'

import SideBar from './SideBar'
import SearchBar from './SearchBar'
import './style.scss'

const MainPage = withRouter(
  function MainPage(props) {
    let match = useRouteMatch()

    return (
      <div className="mainpage">
        <SideBar />
        <div className="mainpage-content">
          <SearchBar
            isMenuButtonVisible={true}
            onMenuClick={null}
          />
        </div>
        <div className="mainpage-route">
          <Switch>
            {props.routeChildren.map(route => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${match.path}${route.path}`}
              >
                <route.component />
              </Route>
            ))}
          </Switch>
        </div>
      </div>
    )
  }
)

export default MainPage
