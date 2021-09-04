import React from 'react'
import { Link } from 'react-router-dom'

import './style.scss'
import logo from '../../../assets/logo-studio.png'
import profile from '../../../assets/thumbnails/profile1.jpg'

function CreatorStudio(props) {
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
      <div className="studio-container"></div>
    </>
  )
}

export default CreatorStudio
