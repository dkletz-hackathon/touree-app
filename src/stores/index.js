import { NodeStore } from './node-store'
import { ProjectStore } from './project-store'

class RootStore {
  constructor() {
    this.nodeStore = new NodeStore()
    this.projectStore = new ProjectStore()
  }
}

const rootStore = new RootStore()

export default rootStore
