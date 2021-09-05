import React from 'react'
import { withRouter } from "react-router-dom"

import InteractiveVideo from './InteractiveVideo'
import storyBooks from '../../../data/storyBooks'
import './style.scss'

class VideoPlayer extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      chatPopup: false,
      chats: [
        {
          name: 'Paula Margareth',
          img: 'https://images.unsplash.com/photo-1597223557154-721c1cecc4b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
          text: 'Wow I remembered my first trip to Bali 3 years ago...',
        },
        {
          name: 'John Abdul-Jabbar',
          img: 'https://images.unsplash.com/photo-1586287011575-a23134f797f9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
          text: 'Kinda refreshed to travel even tho just from the screen XD',
        },
        {
          self: true,
          text: 'Heyyy I really missed the beach, man :( Wanna go to Bali so bad',
        },
        {
          name: 'Anna Samantha',
          img: 'https://images.unsplash.com/photo-1584308972272-9e4e7685e80f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1400&q=80',
          text: 'First time having a virtual tour',
        },
      ]
    }
  }

  togglePopup = () => {
    this.setState({chatPopup: !this.state.chatPopup})
  }

  componentDidMount = async () => {
    const { videoId } = this.props.match.params
    const response = await fetch(`http://www.touree.live/api/video/${videoId}?detail=true`)
    const data = (await response.json()).data

    data.detailsMap = {}
    data.details.forEach(videoDetail => {
      data.detailsMap[videoDetail['id']] = videoDetail
      videoDetail['next_video_details_map'] = {}
      videoDetail['next_video_options'] = []
      if (videoDetail['next_video_details'] == null) {
        return
      }
      videoDetail['next_video_details'].forEach(nextVideo => {
        videoDetail['next_video_details_map'][nextVideo['next_detail_id']] = nextVideo
        videoDetail['next_video_options'].push(nextVideo['next_detail_id'])
      })
    })

    console.log('details', data.detailsMap)
    this.setState({
      body: data
    })
  };

  render = () => {
    const { chatPopup } = this.state
    console.log('hello')
    console.log(this.state.body)

		if (!this.state.body) {
			return <div/>
		}

    return (
      <>
        {!chatPopup && (
          <div
            className="videoplayer-chat-btn"
            onClick={this.togglePopup}
          >
            <span className="material-icons">chat</span>
            <p>Live Chat</p>
          </div>
        )}
        {chatPopup && (
          <div className="videoplayer-chat">
            <div className="videoplayer-chat-header">
              <p>Live Chat</p>
              <span
                className="material-icons"
                onClick={this.togglePopup}
              >
                minimize
              </span>
            </div>
            <div className="videoplayer-chat-items">
              {this.state.chats.map(chat => {
                if (chat.self) {
                  return (
                    <div className="videoplayer-chat-self">
                      <p>{chat.text}</p>
                    </div>
                  )
                }
                return (
                  <div className="videoplayer-chat-other">
                    <img src={chat.img} alt="chat" />
                    <div>
                      <p>{chat.name}</p>
                      <p>{chat.text}</p>
                    </div>
                  </div>
                )
              })}
            </div>
            <div className="videoplayer-chat-input">
              <input type="text" placeholder="Type here to chat" />
            </div>
          </div>
        )}
        <InteractiveVideo storyBook={this.state.body}/>
      </>
    );
  }
}

export default withRouter(VideoPlayer)
