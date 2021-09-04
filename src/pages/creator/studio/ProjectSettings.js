import React from 'react'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'

import placeholder from '../../../assets/thumbnails/thumbnail-placeholder.jpg'

const ProjectSettings = inject('nodeStore', 'projectStore')(observer(
  class ProjectSettings extends React.Component {

    handleUpload = async e => {
      this.props.projectStore.setThumbnail(e.target.files[0])
    }

    render() {
      const { projectStore } = this.props
      const { title, desc, thumbnail } = projectStore

      return (
        <>
          <h1 className="studio-title">Project Settings</h1>
          <div className="form-wrapper">
            <p className="form-title">Thumbnail</p>
            {thumbnail ? (
              <img
                alt="placeholder"
                className="studio-thumbnail"
                src={URL.createObjectURL(toJS(thumbnail))}
              />
            ) : (
              <img
                alt="placeholder"
                className="studio-thumbnail"
                src={placeholder}
              />
            )}
            <label htmlFor="img-upload" type="button">
              Upload Thumbnail
            </label>
            <input
              id="img-upload"
              type="file"
              className="form-input"
              onChange={this.handleUpload}
            />
          </div>
          <div className="form-wrapper">
            <p className="form-title">Video Title</p>
            <input
              type="text"
              className="form-input"
              value={toJS(title)}
              onChange={e => projectStore.setTitle(e.target.value)}
            />
          </div>
          <div className="form-wrapper">
            <p className="form-title">Short Description</p>
            <textarea
              type="text"
              className="form-input"
              value={toJS(desc)}
              onChange={e => projectStore.setDesc(e.target.value)}
            />
          </div>
        </>
      )
    }
  }
))

export default ProjectSettings
