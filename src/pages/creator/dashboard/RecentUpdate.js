import React from 'react'
import { Card, CardHeader, CardBody } from 'shards-react'

export default class RecentUpdate extends React.Component {
  state = {
    updates: [
      {
        icon: 'movie',
        text: 'Your video Quarantine Walks: What\'s Like MRT Station Without PEOPLE? recently got 295 new views',
        subtitle: 'about 2 hours 5 minutes ago',
      },
      {
        icon: 'movie',
        text: 'Your video Quarantine Walks: What\'s Like MRT Station Without PEOPLE? recently got 295 new views',
        subtitle: 'about 2 hours 5 minutes ago',
      },
      {
        icon: 'movie',
        text: 'Your video Quarantine Walks: What\'s Like MRT Station Without PEOPLE? recently got 295 new views',
        subtitle: 'about 2 hours 5 minutes ago',
      },
      {
        icon: 'face',
        text: 'You recently got 120 new subscribers',
        subtitle: 'about 3 hours ago',
      },
    ],
  }

  render() {
    return (
      <Card small className="h-100 card-worker">
        <CardHeader className="border-bottom">
          <h6 className="m-0">Recent Updates</h6>
        </CardHeader>
        <CardBody className="py-1">
          {this.state.updates.map((update, i) => (
            <div key={i} className="update-item">
              <span className="material-icons">{update.icon}</span>
              <div>
                <p>{update.text}</p>
                <p>{update.subtitle}</p>
              </div>
            </div>
          ))}
        </CardBody>
      </Card>
    )
  }
}
