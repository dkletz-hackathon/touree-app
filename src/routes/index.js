import HomePage from '../pages/consumer/homepage/HomePage'
import Discovery from '../pages/consumer/discovery/Discovery'

import CreatorDashboard from '../pages/creator/dashboard/CreatorDashboard'
import CreatorStudio from '../pages/creator/studio/CreatorStudio'
import CreatorVideos from '../pages/creator/videolist/CreatorVideos'
import CreatorVideoDetails from '../pages/creator/videodetails/CreatorVideoDetails'

import MainPage from '../pages/layouts/mainsite/MainPage'
import Dashboard from '../pages/layouts/dashboard/Dashboard'

const routes = [
  {
    path: '/dashboard/',
    component: Dashboard,
    children: [
      {
        path: '',
        exact: true,
        component: CreatorDashboard,
        useLayout: true,
      },
      {
        path: 'studio',
        exact: true,
        component: CreatorStudio,
        useLayout: false,
      },
      {
        path: 'videos',
        exact: true,
        component: CreatorVideos,
        useLayout: true,
      },
      {
        path: 'videos/:videoId',
        exact: true,
        component: CreatorVideoDetails,
        useLayout: true,
      }
    ]
  },
  {
    path: '/',
    component: MainPage,
    children: [
      {
        path: '',
        exact: true,
        component: HomePage,
      },
      {
        path: 'discovery/:region',
        exact: true,
        component: Discovery
      }
    ]
  }
]

export default routes
