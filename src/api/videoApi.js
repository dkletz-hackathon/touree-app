import { BASE_URL } from "./const";

/* Upload static video API */
async function uploadVideo(video) {
	const url = `${BASE_URL}/upload-video`;
	const formData = new FormData();
	formData.append("video", video);

	const options = {
		method: "POST",
		body: formData,
	};

	return await fetch(url, options)
		.then((response) => response.json())
		.then((data) => data.data.replace("static/video/", ""));
}

/* Get static video API */
async function getVideo(fileName) {
	const url = `${BASE_URL}/static/video/${fileName}`;
	const options = {
		method: "GET",
	};

	return await fetch(url, options).then((response) => response.json());
}

/* Create project API */
async function createProject(title, desc, thumbnail) {
	const url = `${BASE_URL}/video`;
	const options = {
		method: "POST",
		body: {
			title: title,
			description: desc,
			thumbnail_image: thumbnail,
		},
	};

	return await fetch(url, options).then((response) => response.json());
}

async function createChapter(
	videoId,
	videoURL,
	defaultNextDetailId = null,
	timeToShowNext = null,
	nextVideoDetails = []
) {
	const url = `${BASE_URL}/video_detail`;
	const options = {
		method: "POST",
		body: {
			video_id: videoId,
			video_url: videoURL,
			default_next_detail_id: defaultNextDetailId,
			time_to_show_next: timeToShowNext,
			next_video_details: nextVideoDetails,
		},
	};

	return await fetch(url, options).then((response) => response.json());
}

async function updateChapter(
	id,
	videoId,
	videoURL,
	defaultNextDetailId = null,
	timeToShowNext = null,
	nextVideoDetails = []
) {
	const url = `${BASE_URL}/video_detail/${id}`;
	const options = {
		method: "POST",
		body: {
			video_id: videoId,
			video_url: videoURL,
			default_next_detail_id: defaultNextDetailId,
			time_to_show_next: timeToShowNext,
			next_video_details: nextVideoDetails,
		},
	};

	return await fetch(url, options).then((response) => response.json());
}

async function deleteChapter(id) {
	const url = `${BASE_URL}/video_detail/${id}`;
	const options = { method: "DELETE" };

	return await fetch(url, options).then((response) => response.json());
}

export {
	getVideo,
	uploadVideo,
	createProject,
	createChapter,
	updateChapter,
	deleteChapter,
};
