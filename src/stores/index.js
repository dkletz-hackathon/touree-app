import { NodeStore } from './node-store'

class RootStore {
  constructor() {
    this.nodeStore = new NodeStore()
  }
}

const rootStore = new RootStore()

export default rootStore
