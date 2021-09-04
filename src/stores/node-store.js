import { makeObservable, observable, action } from 'mobx'
import { createChapter, updateChapter } from '../api/videoApi'

export class NodeStore {
  curNodeIdx = 0
  nodeList = []

  constructor() {
    makeObservable(this, {
      nodeList: observable,
      curNodeIdx: observable,
      setNodeList: action,
      getNode: action,
      updateNode: action,
      addNode: action,
      deleteNode: action,
      publishStoryBook: action,
    })
    this.nodeList = [
      {
        id: 'node0',
        uuid: '',
        name: 'Start',
        text: 'Start',
        video: null,
        videoUrl: '',
        next: [],
      },
    ]
  }

  setNodeList = nodeList => {
    this.nodeList = nodeList
  }

  addNode = parentId => {
    let findParent = (nodes, id, newId) => {
      let node
      for (node of nodes) {
        if (node.id === id) {
          if (!node.hasOwnProperty('next')) node['next'] = []
          node.next.push({
            id: `node${newId}`,
            name: `Node ${newId}`,
            text: `Node ${newId}`,
            video: null,
          })
        } else if (node.hasOwnProperty('next')) {
          findParent(node.next, id, newId)
        }
      }
    }

    findParent(this.nodeList, parentId, this.curNodeIdx + 1)
    this.curNodeIdx += 1
  }

  deleteNode = id => {
    let findParent = (nodes, id) => {
      let found = false
      for (let i = 0; i < nodes.length; i++) {
        if (nodes[i].id === id) {
          nodes.splice(i, 1)
          found = true
        } else if (nodes[i].hasOwnProperty('next')) {
          findParent(nodes[i].next, id)
        }
        if (found) break
      }
    }

    findParent(this.nodeList, id)
  }

  getNode = id => {
    let foundNode = null
    let findNode = (nodes, id) => {
      let node
      let found = false
      for (node of nodes) {
        if (node.id === id) {
          found = true
          foundNode = node
        } else if (node.hasOwnProperty('next')) {
          findNode(node.next, id)
        }
        if (found) break
      }
    }

    findNode(this.nodeList, id)
    return foundNode
  }

  updateNode = (id, name, text, video) => {
    let findNode = (nodes, id) => {
      let node
      let found = false
      for (node of nodes) {
        if (node.id === id) {
          node.name = name
          node.text = text
          node.video = video
          found = true
        } else if (node.hasOwnProperty('next')) {
          findNode(node.next, id)
        }
        if (found) break
      }
    }

    findNode(this.nodeList, id)
  }

  updateNodeVideoURL = (id, videoUrl) => {
    let findNode = (nodes, id) => {
      let node
      let found = false
      for (node of nodes) {
        if (node.id === id) {
          node.videoUrl = videoUrl
          found = true
        } else if (node.hasOwnProperty('next')) {
          findNode(node.next, id)
        }
        if (found) break
      }
    }

    findNode(this.nodeList, id)
  }

  publishStoryBook = async projectUuid => {
    var mapIdToUuid = {}

    let findNode = async (nodes, id) => {
      for (let node of nodes) {
        const response = await createChapter(projectUuid, node.videoUrl, null, 5, [])
        if (response.status === 0) {
          mapIdToUuid[node.id] = response.data.id
          if (node.hasOwnProperty('next')) {
            await findNode(node.next, id)
          }
        }
      }
    }

    await findNode(this.nodeList, this.nodeList[0].id)

    let updateNote = async (nodes, id) => {
      let node
      for (node of nodes) {
        let nextVideoDetails = []
        if (node.hasOwnProperty('next')) {
          let childNode
          for (childNode of node.next) {
            const childId = childNode.id
            nextVideoDetails.push(
              {
                next_detail_id: mapIdToUuid[childId],
                shown_text: childNode.name
              }
            )
          }
        }

        const response = await updateChapter(
          mapIdToUuid[node.id],
          projectUuid,
          node.videoUrl,
          null,
          5,
          nextVideoDetails
        )
        if ((response.status === 0) && (node.hasOwnProperty('next'))) {
          await updateNote(node.next, id)
        }
      }
    }

    updateNote(this.nodeList, this.nodeList[0].id)
  }
}
