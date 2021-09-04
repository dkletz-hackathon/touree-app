import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, Card, CardBody } from 'shards-react'

import './style.scss'
import PageTitle from '../../../components/dashboard/PageTitle'

export default class CreatorVideos extends React.Component {
  render() {
    return (
      <>
        <Row noGutters className="page-header py-4">
          <PageTitle
            title="Videos"
            subtitle="Contents"
            className="text-sm-left mb-3"/>
        </Row>

        <Row>
          <Col lg="12">
            <Card small>
              <CardBody className="pt-0 creator-videos">
                <div className="creator-video-header">
                  <p>Video</p>
                  <p>Date Uploaded</p>
                  <p>Views</p>
                  <p>Comments</p>
                  <p>Likes</p>
                  <p>Actions</p>
                </div>
                {[1, 2, 3, 4, 5, 6].map(i => (
                  <div className="creator-video-item" key={i}>
                    <img src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80" alt="video" />
                    <div className="creator-video-item-desc">
                      <p>Lorem Ipsum Dolor Sit Amet</p>
                      <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has...</p>
                    </div>
                    <div className="creator-video-item-desc">
                      <p>Sep 3, 2020</p>
                      <p>Uploaded</p>
                    </div>
                    <div className="creator-video-item-desc">
                      <p>850,395</p>
                    </div>
                    <div className="creator-video-item-desc">
                      <p>125</p>
                    </div>
                    <div className="creator-video-item-desc">
                      <p>12,428</p>
                    </div>
                    <div className="creator-video-item-actions">
                      <Link to="videos/sadh_ioisd_iusdf">
                        <span className="material-icons">insert_chart_outlined</span>
                      </Link>
                      <span className="material-icons">create</span>
                      <span className="material-icons">delete_outline</span>
                    </div>
                  </div>
                ))}
              </CardBody>
            </Card>
          </Col>
        </Row>
      </>
    )
  }
}
