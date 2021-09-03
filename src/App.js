import {
  BrowserRouter as Router,
  Route,
  Switch
} from'react-router-dom'

import routes from './routes'

function App() {
  return (
    <Router>
      <Switch>
        {routes.map(route => {
          return (
            <Route
              key={route.path}
              path={route.path}
              exact={route.exact}
            >
              <route.component routeChildren={route.children} />
            </Route>
          )
        })}
      </Switch>
    </Router>
  );
}

export default App
