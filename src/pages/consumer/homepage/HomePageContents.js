import React from 'react'
import { Link } from 'react-router-dom'

import mockHomePage from '../../../data/mockHomePage'
import VideoThumbnail from '../../../components/contents/VideoThumbnail'

export default class HomePageContents extends React.Component {
  render() {
    return (
      <>
        {mockHomePage.map(section => (
          <div className="videos-section" key={section.title}>
            <div className="videos-section-title">
              <h1>{section.title}</h1>
              <Link to="#">View more</Link>
            </div>
            <div className="videos-section-items">
              {section.items.map((item, i) => (
                <Link to="/video/test-video" key={i}>
                  <VideoThumbnail key={item.title} {...item} />
                </Link>
              ))}
            </div>
          </div>
        ))}
      </>
    )
  }
}
