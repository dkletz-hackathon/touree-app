import { BASE_URL } from './const'

/* Upload image API */
async function uploadImage(image) {
  const url = `${BASE_URL}/upload-image`
  const formData = new FormData()
  formData.append('image', image)

  const options = {
    method: 'POST',
    body: formData
  }

  return await fetch(url, options)
    .then(response => response.json())
    .then(data => data.data)
}

/* Get image API */
async function getImage(fileName) {
  const url = `${BASE_URL}/static/image/${fileName}`
  const options = {
    method: 'GET'
  }

  return await fetch(url, options)
    .then(response => response.json())
}

export {
  getImage,
  uploadImage
}
