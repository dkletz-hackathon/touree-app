import React from 'react'

import './style.scss'

export default class ChannelThumbnail extends React.Component {
  render() {
    const { thumbnails, name, subs, profile } = this.props
    return (
      <div className="channel-thumbnail">
        <div className="channel-thumbnail-images">
          {thumbnails.map((t, i) => (
            <img src={t} key={i} alt={name} />
          ))}
        </div>
        <div className="channel-thumbnail-info">
          <img src={profile} alt={name} />
          <div>
            <h1>{name}</h1>
            <p>{subs}</p>
          </div>
        </div>
      </div>
    )
  }
}
