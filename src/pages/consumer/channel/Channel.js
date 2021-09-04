import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'

export default class Channel extends React.Component {
  state = {
    tags: [
      'Nature Travel',
      'Hiking',
      'Park Sightseeing',
    ],
    navbar: [
      'Home',
      'Uploads',
      'Playlists',
      'Community',
    ],
  }

  render() {
    const { tags, navbar } = this.state
    return (
      <div className="channel">
        <div className="channel-hero">
          <div className="channel-hero-info">
            <img src="https://images.unsplash.com/photo-1539409363834-aa99701db1d9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80" alt="profile" />
            <div className="channel-hero-text">
              <h1>Hello Travelers</h1>
              <h2>2.85M subscribers</h2>
              <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s!</p>
            </div>
            <div className="channel-hero-misc">
              <h1>Popular Categories</h1>
              {tags.map(tag => (
                <Link key={tag} to="#" className="channel-hero-tag">
                  {tag}
                </Link>
              ))}
              <button className="channel-hero-subscribe">Subscribe</button>
            </div>
          </div>
          <img className="channel-hero-img" alt="hero" src="https://images.unsplash.com/photo-1560103104-4623c14a473b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
        </div>
        <div className="channel-navbar">
          {navbar.map((nav, i) => (
            <div key={i} className={`channel-navbar-item ${i === 0 && 'active'}`}>
              {nav}
            </div>
          ))}
        </div>
      </div>
    )
  }
}
