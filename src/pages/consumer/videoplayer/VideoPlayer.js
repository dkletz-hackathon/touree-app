import React from 'react'
import { withRouter } from "react-router-dom"

import InteractiveVideo from './InteractiveVideo'
import storyBooks from '../../../data/storyBooks'
import './style.scss'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {}
  }

  componentDidMount = async () => {
    const { videoId } = this.props.match.params
    const response = await fetch(`http://www.touree.live/api/video/${videoId}?detail=true`)
    const data = (await response.json()).data

    data.detailsMap = {}
    data.details.forEach(videoDetail => {
      data.detailsMap[videoDetail['id']] = videoDetail
      videoDetail['next_video_details_map'] = {}
      videoDetail['next_video_details'].forEach(nextVideo => {
        videoDetail['next_video_details_map'][nextVideo['next_detail_id']] = nextVideo
      })
    })

    console.log('details', data.detailsMap)
    this.setState({
      body: data
    })
  };

  render = () => {
    console.log('hello')
    console.log(this.state.body)
    return (
      <InteractiveVideo storyBook={this.state.body}/>
    );
  }
}

export default withRouter(VideoPlayer)
