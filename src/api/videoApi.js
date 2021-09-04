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
    .then(response => response.json())
    .then(data => data.data)
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
    headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			title: title,
			description: desc,
			thumbnail_image: thumbnail,
		}),
	};

	return await fetch(url, options)
    .then((response) => response.json())
    .then(data => data.data.id)
}

async function updateProject(id, title, desc, thumbnail, startDetailId=null) {
	const url = `${BASE_URL}/video/${id}`;
	const options = {
		method: "PUT",
		body: {
			title: title,
			description: desc,
			thumbnail_image: thumbnail,
			start_detail_id: startDetailId
		},
	};

	return await fetch(url, options).then((response) => response.json());
}

async function getProject(videoId) {
	const url = `${BASE_URL}/video/${videoId}?detail=true`;
	const options = { method: "GET" };

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
    headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
      {
        video_id: videoId,
        video_url: videoURL,
        default_next_detail_id: defaultNextDetailId,
        time_to_show_next: timeToShowNext,
        next_video_details: nextVideoDetails,
      }
    ),
	};

  console.log(options)

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
    headers: { "Content-Type": "application/json" },
		body: JSON.stringify(
      {
        video_id: videoId,
        video_url: videoURL,
        default_next_detail_id: defaultNextDetailId,
        time_to_show_next: timeToShowNext,
        next_video_details: nextVideoDetails,
      }
    ),
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
	getProject,
	updateProject,
	createProject,
	createChapter,
	updateChapter,
	deleteChapter,
};
