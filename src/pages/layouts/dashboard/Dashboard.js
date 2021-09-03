import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Col } from 'shards-react'

import './style.scss'

export default function Dashboard(props) {
  let match = useRouteMatch()
  return (
    <Switch>
      {props.routeChildren.map(route => (
        <Route
          key={route.path}
          exact={route.exact}
          path={`${match.path}${route.path}`}
        >
          {route.useLayout ? (
            <div className="dashboard-container">
              <Container fluid className="main-content-container dashboard-route px-5">
                <route.component />
              </Container>
            </div>
          ) : <route.component />}
        </Route>
      ))}
    </Switch>
  )
}
