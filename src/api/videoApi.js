import { BASE_URL } from './const'

/* Upload static video API */
async function uploadVideo(video) {
  const url = `${BASE_URL}/upload-video`
  const formData = new FormData()
  formData.append('video', video)

  const options = {
    method: 'POST',
    body: formData
  }

  return await fetch(url, options)
    .then(response => response.json())
    .then(data => data.data.replace("static/video/",""))
}

/* Get static video API */
async function getVideo(fileName) {
  const url = `${BASE_URL}/static/video/${fileName}`
  const options = {
    method: 'GET'
  }

  return await fetch(url, options)
    .then(response => response.json())
}

/* Create project API */
async function createProject(title, desc, thumbnail) {
  const url = `${BASE_URL}/video`
  const options = {
    method: 'POST',
    body: {
      title: title,
      description: desc,
      thumbnail_image: thumbnail
    }
  }

  return await fetch(url, options)
    .then(response => response.json())
}

export {
  getVideo,
  uploadVideo,
  createProject
}
