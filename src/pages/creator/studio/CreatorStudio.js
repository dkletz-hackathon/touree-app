import React from 'react'
import { Link } from 'react-router-dom'
import { toJS } from 'mobx'
import { inject, observer } from 'mobx-react'

import NodeSettings from './NodeSettings'
import ProjectSettings from './ProjectSettings'
import StudioEditor from './StudioEditor'
import './style.scss'
import logo from '../../../assets/logo-studio.png'
import profile from '../../../assets/thumbnails/profile1.jpg'

const CreatorStudio = inject('nodeStore')(observer(
  function CreatorStudio(props) {
    let [selectedNode, setSelectedNode] = React.useState(null)

    let showNodeSettings = id => {
      setSelectedNode(toJS(props.nodeStore.getNode(id)))
    }

    let showProjectSettings = () => {
      setSelectedNode(null)
    }

    return (
      <>
        <div className="studio-navbar">
          <Link to="/dashboard">
            <img src={logo} alt="logo" className="studio-logo" />
          </Link>
          <div className="studio-navbar-actions">
            <button onClick={null}>
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
