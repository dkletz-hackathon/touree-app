import React from 'react'
import { withRouter } from "react-router-dom"

import InteractiveVideo from './InteractiveVideo'
import storyBooks from '../../../data/storyBooks'
import './style.scss'

class VideoPlayer extends React.Component {
  render() {
    const { videoId } = this.props.match.params;
    const storyBook = storyBooks.find((sb) => sb.id === videoId)
    if (!storyBook) {
      this.props.history.push('/')
    }

    return (
      <InteractiveVideo storyBook={storyBook} />
    )
  }
}

export default withRouter(VideoPlayer)
