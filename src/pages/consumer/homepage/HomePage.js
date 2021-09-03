import React from 'react'

import './style.scss'

import HomePageContents from './HomePageContents'
export default class HomePage extends React.Component {
  render() {
    return (
      <div className="homepage">
        <HomePageContents />
      </div>
    )
  }
}
