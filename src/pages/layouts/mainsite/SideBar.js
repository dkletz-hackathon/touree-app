import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import profile1 from '../../../assets/thumbnails/profile1.jpg'

export default class SideBar extends React.Component {
  state = {
    sections: [
      {
        title: 'Library',
        items: [
          {
            title: 'My Channel',
            icon: 'face'
          },
          {
            title: 'Subscriptions',
            icon: 'video_library'
          },
          {
            title: 'History',
            icon: 'history'
          },
          {
            title: 'Watch Later',
            icon: 'alarm'
          }
        ]
      },
      {
        title: 'Categories',
        items: [
          {
            title: 'Food Lover',
            icon: 'restaurant_menu'
          },
          {
            title: 'Urban Explore',
            icon: 'location_city'
          },
          {
            title: 'Museum Trip',
            icon: 'museum'
          },
          {
            title: 'Nature Travel',
            icon: 'landscape'
          },
          {
            title: 'Show More',
            icon: 'more_horiz'
          }
        ]
      },
      {
        title: 'Services',
        items: [
          {
            title: 'Settings',
            icon: 'settings'
          },
          {
            title: 'Help & Support',
            icon: 'help_center'
          },
          {
            title: 'Report',
            icon: 'flag'
          },
          {
            title: 'About Us',
            icon: 'info'
          },
        ]
      }
    ]
  }

  render() {
    let sidebarClassHidden = this.props.isSidebarVisible ? '' : 'hidden'
    let overlayClassHidden = this.props.isOverlayVisible ? '' : 'hidden'

    return (
      <>
        <div className={`mainpage-sidebar ${sidebarClassHidden}`}>
          <Link to="/">
            <img src={logo} alt="logo" className="mainpage-logo" />
          </Link>
          <div className="mainpage-user">
            <img src={profile1} alt="user" />
            <h1>John Stallone</h1>
            <h2>john.stallone@gmail.com</h2>
          </div>
          {this.state.sections.map(sect => (
            <div className="mainpage-features" key={sect.title}>
              <h1>{sect.title}</h1>
              {sect.items.map(it => (
                <Link key={it.title} to="#" className="mainpage-features-item">
                  <span className="material-icons">{it.icon}</span>
                  <p>{it.title}</p>
                </Link>
              ))}
            </div>
          ))}
        </div>
        <div
          className={`mainpage-overlay ${overlayClassHidden}`}
          onClick={this.props.onClosing}
        />
      </>
    )
  }
}
