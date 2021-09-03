import HomePage from '../pages/consumer/homepage/HomePage'
import MainPage from '../pages/layouts/mainsite/MainPage'

const routes = [
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
