import HomePage from '../pages/consumer/homepage/HomePage'
import CreatorDashboard from '../pages/creator/dashboard/CreatorDashboard'
import CreatorStudio from '../pages/creator/studio/CreatorStudio'

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
      }
    ]
  }
]

export default routes
