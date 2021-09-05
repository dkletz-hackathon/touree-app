import React from 'react'
import { inject, observer } from 'mobx-react'
import { Player } from 'video-react'

import placeholder from '../../../assets/thumbnails/thumbnail-placeholder.jpg'
import { uploadVideo } from '../../../api/videoApi'

const NodeSettings = inject('nodeStore')(observer(
  class NodeSettings extends React.Component {
    state = {
      id: null,
      name: '',
      text: '',
      video: null,
    }

    handleUpload = async e => {
      this.setState({video: e.target.files[0]})
    }

    updateNode = () => {
      const { nodeStore } = this.props
      const { id, name, text, video } = this.state
      nodeStore.updateNode(id, name, text, video)
      uploadVideo(video)
        .then(videoURL => {
          console.log(videoURL)
          nodeStore.updateNodeVideoURL(id, videoURL)
        })
    }

    componentDidMount = () => {
      const { node } = this.props
      this.setState({
        id: node.id,
        name: node.name,
        text: node.text,
        video: node.video,
      })
    }

    static getDerivedStateFromProps(nextProps, prevState) {
      if (prevState.id !== nextProps.node.id) {
        const { node } = nextProps
        return {
          id: node.id,
          name: node.name,
          text: node.text,
          video: node.video,
        }
      }
      return prevState
    }

    render() {
      const { video, name, text } = this.state
      return (
        <>
          <h1 className="studio-title">Node Settings</h1>
          <div className="form-wrapper">
            <p className="form-title">Video</p>
            {video ? (
              <Player
                playsInline
                className="studio-thumbnail"
                src={URL.createObjectURL(video)}
              />
            ) : (
              <img
                alt="placeholder"
                className="studio-thumbnail"
                src={placeholder}
              />
            )}
            <label htmlFor="img-upload" type="button">
              Upload Video
            </label>
            <input
              id="img-upload"
              type="file"
              accept="video/*"
              className="form-input"
              onChange={this.handleUpload}
            />
          </div>
          <div className="form-wrapper">
            <p className="form-title">Node Name</p>
            <input
              type="text"
              className="form-input"
              value={name}
              onChange={e => this.setState({name: e.target.value})}
            />
          </div>
          <div className="form-wrapper">
            <p className="form-title">Text on Video</p>
            <input
              type="text"
              className="form-input"
              value={text}
              onChange={e => this.setState({text: e.target.value})}
            />
          </div>
          <button
            className="studio-node-update"
            onClick={this.updateNode}
          >
            Update Node
          </button>
        </>
      )
    }
  }
))

export default NodeSettings
