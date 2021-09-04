import React from 'react'

import './style.scss'

export default class DestinationThumbnail extends React.Component {
  render() {
    const { name, region, thumbnail, subtitle } = this.props
    return (
      <div className="destination-thumbnail">
        <div className="destination-thumbnail-info">
          <h1>{name}</h1>
          <h2>{region}</h2>
          <p>{subtitle}</p>
        </div>
        <img src={thumbnail} alt={name} />
      </div>
    )
  }
}
