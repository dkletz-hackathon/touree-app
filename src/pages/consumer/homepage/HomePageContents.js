import React from "react";
import { Link } from "react-router-dom";

import { getProjects } from "../../../api/videoApi";

import mockHomePage from "../../../data/mockHomePage";
import VideoThumbnail from "../../../components/contents/VideoThumbnail";

export default class HomePageContents extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			projects: [],
		};
	}

	componentDidMount() {
		getProjects().then((resp) => {
			let cleaned = [];
			const section = mockHomePage[0].items;
			let idx = 0;
			for (let p of resp.data) {
				idx++;
				if (p.start_detail_id) {
					cleaned.push({
						id: p.id,
						title: p.title,
						channel: section[idx % section.length].channel,
						channelName: section[idx % section.length].channelName,
						thumbnail: section[idx % section.length].thumbnail,
					});
				}
			}

			this.setState({
				projects: cleaned,
			});
		});
	}

	render() {
		return (
			<>
				{mockHomePage.map((section) => (
					<div className="videos-section" key={section.title}>
						<div className="videos-section-title">
							<h1>{section.title}</h1>
							<Link to="#">View more</Link>
						</div>

						{section.title === "Touree Trendings" ? (
							<div className="videos-section-items">
								{this.state.projects.map((item, i) => (
									<Link to={`/video/${item.id}`} key={i}>
										<VideoThumbnail key={item.title} {...item} />
									</Link>
								))}
							</div>
						) : (
							<div className="videos-section-items">
								{section.items.map((item, i) => (
									<Link
										to="/video/4923e492-2eaf-437a-941f-d643b755fef2"
										key={i}
									>
										<VideoThumbnail key={item.title} {...item} />
									</Link>
								))}
							</div>
						)}
					</div>
				))}
			</>
		);
	}
}
