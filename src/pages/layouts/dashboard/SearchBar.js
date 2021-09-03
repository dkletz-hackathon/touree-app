import React from 'react'
import { Link } from 'react-router-dom'
import { Container } from 'shards-react'

import profile1 from '../../../assets/thumbnails/profile1.jpg'

export default class SearchBar extends React.Component {
  render() {
    return (
      <Container fluid className="main-content-container dashboard-searchbar-wrapper px-5">
        <div className="dashboard-searchbar">
          <div className="dashboard-search">
            <span className="material-icons">search</span>
            <input
              type="text"
              placeholder="Search"
            />
          </div>
          <div className="dashboard-searchbar-actions">
            <Link to="/dashboard/studio">
              <button>
                <span className="material-icons">camera</span>
                <p>Create Video</p>
              </button>
            </Link>
            <img alt="profile" src={profile1} />
          </div>
        </div>
      </Container>
    )
  }
}
