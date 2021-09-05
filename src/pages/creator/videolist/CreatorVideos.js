import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Card, CardBody } from "shards-react";

import { getProjects } from "../../../api/videoApi";

import "./style.scss";
import PageTitle from "../../../components/dashboard/PageTitle";

const months = [
	"Jan",
	"Feb",
	"Mar",
	"April",
	"May",
	"June",
	"July",
	"Aug",
	"Sep",
	"Oct",
	"Nov",
	"Dec",
];

export default class CreatorVideos extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [],
		};
	}

	componentDidMount() {
		getProjects().then((resp) => {
			let cleaned = [];
			for (let p of resp.data) {
				if (p.start_detail_id) {
					cleaned.push(p);
				}
			}

			this.setState({
				projects: cleaned,
			});
		});
	}

	formatDate(ts) {
		const d = new Date(parseInt(ts) * 1000);
		console.log(d);

		return months[d.getMonth()] + " " + d.getDate() + ", " + d.getFullYear();
	}

	render() {
		return (
			<>
				<Row noGutters className="page-header py-4">
					<PageTitle
						title="Videos"
						subtitle="Contents"
						className="text-sm-left mb-3"
					/>
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
								{this.state.projects.map((p) => (
									<div className="creator-video-item" key={p.id}>
										<img
											src={`http://${window.location.hostname}/${p.thumbnail_image}`}
											alt="video"
										/>
										<div className="creator-video-item-desc">
											<p>{p.title}</p>
											<p>{p.description}</p>
										</div>
										<div className="creator-video-item-desc">
											<p>{this.formatDate(p.created_at)}</p>
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
											<Link to={`videos/${p.id}`}>
												<span className="material-icons">
													insert_chart_outlined
												</span>
											</Link>
											<span className="material-icons">create</span>
											<span className="material-icons">delete_outline</span>
										</div>
									</div>
								))}
								{[1, 2].map((i) => (
									<div className="creator-video-item" key={i}>
										<img
											src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1825&q=80"
											alt="video"
										/>
										<div className="creator-video-item-desc">
											<p>Lorem Ipsum Dolor Sit Amet</p>
											<p>
												Lorem Ipsum is simply dummy text of the printing and
												typesetting industry. Lorem Ipsum has...
											</p>
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
											<Link to="videos/4923e492-2eaf-437a-941f-d643b755fef2">
												<span className="material-icons">
													insert_chart_outlined
												</span>
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
		);
	}
}
