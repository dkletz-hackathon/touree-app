import { makeObservable, observable, action } from 'mobx'

export class ProjectStore {
  title = ''
  desc = ''
  thumbnail = null
  uuid = ''

  constructor() {
    makeObservable(this, {
      uuid: observable,
      title: observable,
      desc: observable,
      thumbnail: observable,
      setUuid: action,
      setTitle: action,
      setDesc: action,
      setThumbnail: action,
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
}
