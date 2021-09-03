import {
  BrowserRouter as Router,
  Route,
  Switch
} from'react-router-dom'
import { Provider } from 'mobx-react'

import RootStore from './stores'
import 'bootstrap/dist/css/bootstrap.min.css'
import './styles/shards-dashboards.1.1.0.min.css'

import routes from './routes'

function App() {
  const { ...otherStores } = RootStore

  return (
    <Provider rootStore={RootStore} {...otherStores}>
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
    </Provider>
  );
}

export default App
