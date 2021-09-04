import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col, CardHeader, Card, CardBody, Breadcrumb, BreadcrumbItem } from 'shards-react'

import './style.scss'
import PageTitle from '../../../components/dashboard/PageTitle'

export default function CreatorVideoDetails() {
  return (
    <>
      <Row noGutters className="page-header py-4">
        <Breadcrumb>
          <BreadcrumbItem>
            <Link to='/dashboard/videos'>Videos</Link>
          </BreadcrumbItem>
          <BreadcrumbItem active>Video Details</BreadcrumbItem>
        </Breadcrumb>
        <PageTitle
          title="Video Details"
          subtitle="Videos"
          md="12"
          className="text-sm-left mb-3"/>
      </Row>
      <Row>
        <Col lg="8"></Col>
        <Col lg="4">
          <Card small>
            <CardHeader className="border-bottom">
              <h6 className="m-0">Details</h6>
            </CardHeader>
            <CardBody className="pt-0">
              <div className="videodetail-item">
                <p>Video Thumbnail</p>
                <img src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80" alt="thumbnail" />
              </div>
              <div className="videodetail-item">
                <p>Video Title</p>
                <h1>Explore Bali: Morning in Singaraja</h1>
              </div>
              <div className="videodetail-item">
                <p>Video Description</p>
                <h2>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry.</h2>
              </div>
              <div className="videodetail-item">
                <p>Video Duration</p>
                <h2>8 Paths • 5 Minutes</h2>
              </div>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </>
  )
}
