import {
  BrowserRouter as Router,
  Route,
  Switch
} from'react-router-dom'

import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/shards-dashboards.1.1.0.min.css'

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
