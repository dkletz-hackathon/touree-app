import { makeObservable, observable, action } from 'mobx'

export class ProjectStore {
  title = ''
  desc = ''
  thumbnail = null
  thumbnailUrl = null
  uuid = ''

  constructor() {
    makeObservable(this, {
      uuid: observable,
      title: observable,
      desc: observable,
      thumbnail: observable,
      thumbnailUrl: observable,
      setUuid: action,
      setTitle: action,
      setDesc: action,
      setThumbnail: action,
      setThumbnailUrl: action,
    })
  }

  setUuid = uuid => {
    this.uuid = uuid
  }

  setTitle = title => {
    this.title = title
  }

  setDesc = desc => {
    this.desc = desc
  }

  setThumbnail = thumbnail => {
    this.thumbnail = thumbnail
  }

  setThumbnailUrl = thumbnailUrl => {
    this.thumbnailUrl = thumbnailUrl
  }
}
