import React from "react";
import { Link } from "react-router-dom";
import {
	Row,
	Col,
	CardHeader,
	Card,
	CardBody,
	Breadcrumb,
	BreadcrumbItem,
} from "shards-react";

import "./style.scss";
import PageTitle from "../../../components/dashboard/PageTitle";
import { getProjectInsight } from "../../../api/insightApi";
import GraphAnalytics from "./GraphAnalytics";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";

class CreatorVideoDetails extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			project: null,
		};
	}

	componentDidMount() {
		const { videoId } = this.props.match.params;

		getProjectInsight(videoId).then((resp) => {
			this.setState({
				project: resp.data,
			});
		}).catch(e => console.log(e));
	}

	render() {
		const { project } = this.state;
		if (!project) {
			return <div />;
		}

		return (
			<>
				<Row noGutters className="page-header py-4">
					<Breadcrumb>
						<BreadcrumbItem>
							<Link to="/dashboard/videos">Videos</Link>
						</BreadcrumbItem>
						<BreadcrumbItem active>Video Details</BreadcrumbItem>
					</Breadcrumb>
					<PageTitle
						title="Video Details"
						subtitle="Videos"
						md="12"
						className="text-sm-left mb-3"
					/>
				</Row>
				<Row>
					<Col lg="8">
						<GraphAnalytics project={project} />
					</Col>
					<Col lg="4">
						<Card small>
							<CardHeader className="border-bottom">
								<h6 className="m-0">Details</h6>
							</CardHeader>
							<CardBody className="pt-0">
								<div className="videodetail-item">
									<p>Video Thumbnail</p>
									<img
										src={`http://${window.location.hostname}/${project.thumbnail_image}`}
										alt="thumbnail"
									/>
								</div>
								<div className="videodetail-item">
									<p>Video Title</p>
									<h1>{project.title}</h1>
								</div>
								<div className="videodetail-item">
									<p>Video Description</p>
									<h2>
										{project.description}
									</h2>
								</div>
								<div className="videodetail-item">
									<p>Video Duration</p>
									<h2>{project.details.length} Paths • 5 Minutes</h2>
								</div>
							</CardBody>
						</Card>
					</Col>
				</Row>
			</>
		);
	}
}

export default withRouter(CreatorVideoDetails);
