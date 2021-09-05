import React from 'react'
import { Link, useHistory } from 'react-router-dom'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

import NodeSettings from './NodeSettings'
import ProjectSettings from './ProjectSettings'
import StudioEditor from './StudioEditor'
import './style.scss'
import mockVideo from '../../../data/mockVideo'
import logo from '../../../assets/logo-studio.png'
import profile from '../../../assets/thumbnails/profile1.jpg'
import { uploadImage } from '../../../api/imageApi'
import { createProject } from '../../../api/videoApi'

let Modal = withReactContent(Swal)

const CreatorStudio = inject('nodeStore', 'projectStore')(observer(
  function CreatorStudio(props) {
    let history = useHistory()
    let { nodeStore, projectStore } = props
    let [selectedNode, setSelectedNode] = React.useState(null)

    let showNodeSettings = id => {
      setSelectedNode(toJS(props.nodeStore.getNode(id)))
    }

    let showProjectSettings = () => {
      setSelectedNode(null)
    }

    let handlePublish = () => {
      Modal.fire({
        width: 600,
        showConfirmButton: false,
        html: (
          <>
            <p className="studio-modal-header">You will publish following video</p>
            <div className="studio-modal">
              <img src={URL.createObjectURL(projectStore.thumbnail)} alt="publish" />
              <div className="studio-modal-info">
                <h1>{projectStore.title}</h1>
                <p>{projectStore.desc}</p>
                <div className="studio-modal-info-icons">
                  <span className="material-icons">account_tree</span>
                  <span className="material-info">4 Video Paths</span>
                  <span className="material-icons">query_builder</span>
                  <span className="material-info">5 Minutes</span>
                </div>
              </div>
            </div>
            <div className="studio-modal-actions">
              <button onClick={closeModal}>Cancel</button>
              <button onClick={publishVideo}>Publish & Show</button>
            </div>
          </>
        )
      })
    }

    let closeModal = () => {
      Modal.close()
    }

    let publishVideo = () => {
      const { projectStore, nodeStore } = props

      uploadImage(projectStore.thumbnail)
        .then(fileName => {
          console.log(fileName)
          const { title, desc } = projectStore
          createProject(title, desc, fileName)
            .then(uuid => {
              console.log(uuid)
              projectStore.setUuid(uuid)
              projectStore.setThumbnail(fileName)
              nodeStore.publishStoryBook(uuid, title, desc, fileName)
              Modal.close()
              setTimeout(() => {
                history.push('/dashboard')
              }, 500)
            })
        })
    }

    return (
      <>
        <div className="studio-navbar">
          <Link to="/dashboard">
            <img src={logo} alt="logo" className="studio-logo" />
          </Link>
          <div className="studio-navbar-actions">
            <button onClick={handlePublish}>
              <span className="material-icons">movie</span>
              <p>Publish Video</p>
            </button>
            <img src={profile} alt="profile" className="studio-profile" />
          </div>
        </div>
        <div className="studio-container">
          <StudioEditor
            onNodeClick={showNodeSettings}
            onBackgroundClick={showProjectSettings}
          />
          <div className="editor-settings">
            {selectedNode ? (
              <NodeSettings node={selectedNode} />
            ) : (
              <ProjectSettings />
            )}
          </div>
        </div>
      </>
    )
  }
))

export default CreatorStudio
