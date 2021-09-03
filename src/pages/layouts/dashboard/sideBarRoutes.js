const routes = [
  {
    section: 'Overview',
    items: [
      {
        title: 'Dashboard',
        icon: 'dashboard',
        path: '/dashboard',
        main: true,
      },
      {
        title: 'Analytics',
        icon: 'analytics',
        path: '#',
      },
      {
        title: 'Monetization',
        icon: 'monetization_on',
        path: '#',
      }
    ]
  },
  {
    section: 'Contents',
    items: [
      {
        title: 'Videos',
        icon: 'movie',
        path: '/dashboard/videos',
      },
      {
        title: 'Playlists',
        icon: 'featured_play_list',
        path: '#',
      },
      {
        title: 'Media Libraries',
        icon: 'perm_media',
        path: '#',
      },
    ]
  },
  {
    section: 'Services',
    items: [
      {
        title: 'Settings',
        icon: 'settings',
        path: '#',
      },
    ]
  }
]

export default routes
