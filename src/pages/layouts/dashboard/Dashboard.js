import React from 'react'
import { Switch, Route, useRouteMatch } from 'react-router-dom'
import { Container, Row, Col } from 'shards-react'

import SearchBar from './SearchBar'
import SideBar from './SideBar'
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
              <SideBar />
              <div className="dashboard-contents">
                <SearchBar />
                <Container fluid>
                  <Row>
                    <Col
                      className="main-content"
                      lg="12" md="9" sm="12"
                    >
                      <Container fluid className="main-content-container dashboard-route px-5">
                        <route.component />
                      </Container>
                    </Col>
                  </Row>
                </Container>
              </div>
            </div>
          ) : <route.component />}
        </Route>
      ))}
    </Switch>
  )
}
