import React from 'react'
import { Link } from 'react-router-dom'

import logo from '../../../assets/logo.png'
import profile1 from '../../../assets/thumbnails/profile1.jpg'

export default function SearchBar(props) {
  let [popup, setPopup] = React.useState(false)
  let classHidden = props.isMenuButtonVisible ? '' : 'hidden'

  return (
    <>
      {popup && (
        <div className="mainpage-popup">
          <Link to="/dashboard">
            <span className="material-icons">dashboard</span>
            <p>Dashboard</p>
          </Link>
          <Link to="/dashboard/studio">
            <span className="material-icons">movie</span>
            <p>Touree Studio</p>
          </Link>
          <Link to="#">
            <span className="material-icons">exit_to_app</span>
            <p>Sign Out</p>
          </Link>
        </div>
      )}
      <div className={`mainpage-search ${classHidden}`}>
        <div className="search-input">
          {!props.isMenuButtonVisible && (
            <>
              <button
                className="searchbar-menubtn"
                onClick={props.onMenuClick}
              >
                <span className="material-icons">menu</span>
              </button>
              <Link to="/">
                <img src={logo} alt="logo" className="search-logo" />
              </Link>
            </>
          )}
          <span className="material-icons">search</span>
          <input
            type="text"
            placeholder="Search"
          />
        </div>
        <div className="toolbar-actions">
          <span className="material-icons">mail</span>
          <span className="material-icons">notifications</span>
          <img
            className="toolbar-profile"
            src={profile1}
            alt="profile"
            onClick={() => setPopup(!popup)}
          />
        </div>
      </div>
    </>
  )
}
