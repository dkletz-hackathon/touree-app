import React from 'react'
import { Switch, Route, useRouteMatch, useLocation, withRouter } from 'react-router-dom'

const MainPage = withRouter(
  function MainPage(props) {
    let match = useRouteMatch()

    return (
      <div className="mainpage">
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
    )
  }
)

export default MainPage
