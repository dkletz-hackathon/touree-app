import React from 'react'
import { Link } from 'react-router-dom'

import HomePageContents from './HomePageContents'
import './style.scss'
export default class HomePage extends React.Component {
  state = {
    countries: [
      {
        name: 'Indonesia',
        img: 'https://images.unsplash.com/photo-1505993597083-3bd19fb75e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2254&q=80',
      },
      {
        name: 'Japan',
        img: 'https://images.unsplash.com/photo-1557409518-691ebcd96038?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      },
      {
        name: 'Thailand',
        img: 'https://images.unsplash.com/photo-1532370184535-22cec5ca8480?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80',
      },
      {
        name: 'Malaysia',
        img: 'https://images.unsplash.com/photo-1510923119584-fc67ed7ff3de?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2253&q=80',
      },
      {
        name: 'Singapore',
        img: 'https://images.unsplash.com/photo-1525625293386-3f8f99389edd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1898&q=80',
      },
      {
        name: 'South Korea',
        img: 'https://images.unsplash.com/photo-1540998145333-e2eef1a9822d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2733&q=80',
      },
      {
        name: 'USA',
        img: 'https://images.unsplash.com/photo-1422464804701-7d8356b3a42f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2048&q=80',
      },
      {
        name: 'Show more...',
        img: 'https://images.unsplash.com/photo-1531685250784-7569952593d2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
      },
    ],
  }

  render() {
    return (
      <div className="homepage">
        <div className="homepage-hero">
          <div className="homepage-hero-info">
            <h1>Tired at Home?</h1>
            <p>Take a break, and explore the world directly from your place!</p>
          </div>
          <img alt="hero" src="https://images.unsplash.com/photo-1542640244-7e672d6cef4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2100&q=80" />
        </div>
        <div className="homepage-countries">
          {this.state.countries.map(country => (
            <Link
              to="/discovery/indonesia"
              key={country.name}
              className="homepage-countries-item"
            >
              <p>{country.name}</p>
              <img src={country.img} alt={country.name} />
            </Link>
          ))}
        </div>
        <HomePageContents />
      </div>
    )
  }
}
