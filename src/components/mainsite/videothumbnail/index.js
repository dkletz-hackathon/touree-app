import React from 'react'

import './style.scss'

export default class VideoThumbnail extends React.Component {
  render() {
    const { thumbnail, channel, channelName, title, subtitle } = this.props
    return (
      <div className="video-thumbnail">
        <img className="thumbnail-photo" src={thumbnail} alt="video" />
        <img className="thumbnail-channel" src={channel} alt="channel" />
        <h2>{channelName}</h2>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    )
  }
}
