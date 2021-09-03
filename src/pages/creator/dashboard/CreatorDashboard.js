import React from 'react'
import { Row, Col } from 'shards-react'

import './style.scss'
import PageTitle from '../../../components/dashboard/PageTitle'
import RecentUpdate from './RecentUpdate'
import AudienceGraph from './AudienceGraph'
import Stats from './Stats'

export default class CreatorDashboard extends React.Component {
  render() {
    return (
      <>
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Overview"
            subtitle="Dashboard"
            className="text-sm-left mb-3"/>
        </Row>

        <Row>
          <Col lg="8">
            <Stats />
            <AudienceGraph />
          </Col>
          <Col lg="4"><RecentUpdate /></Col>
        </Row>
      </>
    )
  }
}
