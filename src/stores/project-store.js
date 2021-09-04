import { makeObservable, observable, action } from 'mobx'

export class ProjectStore {
  title = ''
  desc = ''
  thumbnail = null

  constructor() {
    makeObservable(this, {
      title: observable,
      desc: observable,
      thumbnail: observable,
      setTitle: action,
      setDesc: action,
      setThumbnail: action,
    })
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
