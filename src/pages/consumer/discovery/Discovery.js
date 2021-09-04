import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import mockDiscovery from '../../../data/mockDiscovery'
import VideoThumbnail from '../../../components/mainsite/videothumbnail'

export default class Discovery extends React.Component {
  render() {
    return (
      <div className="discovery">
        <div className="discovery-hero">
          <div className="discovery-hero-info">
            <h1>Indonesia</h1>
            <p>Indonesia is a country in Southeast Asia and Oceania, between the Indian and Pacific oceans. It is the world's largest island country and the 14th-largest country by land area, at 1,904,569 square kilometres (735,358 square miles).</p>
            <div className="discovery-hero-data">
              <span className="material-icons">face</span>
              <span className="hero-data">220 Channels to Follow</span>
              <span className="material-icons">movie</span>
              <span className="hero-data">287K Videos to Watch</span>
            </div>
          </div>
          <img alt="hero" src="https://images.unsplash.com/photo-1560103104-4623c14a473b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" />
        </div>
        <div className="videos-section">
          <div className="videos-section-title">
            <h1>{mockDiscovery.recommended.title}</h1>
            <Link to="#">View more</Link>
          </div>
          <div className="videos-section-items">
            {mockDiscovery.recommended.items.map(item => (
              <Link to="/video/test-video" key={item.title}>
                <VideoThumbnail {...item} />
              </Link>
            ))}
          </div>
        </div>
      </div>
    )
  }
}
