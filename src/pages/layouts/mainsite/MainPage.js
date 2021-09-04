import React from 'react'
import { Switch, Route, useRouteMatch, useLocation, withRouter } from 'react-router-dom'

import SideBar from './SideBar'
import SearchBar from './SearchBar'
import './style.scss'

const MainPage = withRouter(
  function MainPage(props) {
    let match = useRouteMatch()
    let location = useLocation()
    let [showSidebar, setShowSidebar] = React.useState(false)
    let [showOverlay, setShowOverlay] = React.useState(false)

    let hideOverlay = pathname => {
      return (
        pathname === '/' ||
        pathname.startsWith('/discovery') ||
        pathname.startsWith('/channel')
      )
    }

    let initializeState = (pathname) => {
      if (hideOverlay(pathname)) {
        setShowSidebar(true)
        setShowOverlay(false)
      } else {
        setShowSidebar(false)
        setShowOverlay(false)
      }
    }

    let handleMenuClick = () => {
      setShowSidebar(!showSidebar)
      if (hideOverlay(location.pathname)) setShowOverlay(false)
      else setShowOverlay(!showOverlay)
    }

    let classHidden = !hideOverlay(location.pathname) ? 'hidden' : ''

    props.history.listen((location, action) => {
      initializeState(location.pathname)
    })

    React.useEffect(() => {
      initializeState(location.pathname)
      // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])

    return (
      <div className="mainpage">
        <SideBar
          isSidebarVisible={showSidebar}
          isOverlayVisible={showOverlay}
          onClosing={handleMenuClick}
        />
        <div className="mainpage-content">
          <SearchBar
            isMenuButtonVisible={showSidebar}
            onMenuClick={handleMenuClick}
          />
          <div className={`mainpage-route ${classHidden}`}>
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
      </div>
    )
  }
)

export default MainPage
