import React from 'react'
import { inject, observer } from 'mobx-react'
import { toJS } from 'mobx'
import { ArcherContainer, ArcherElement } from 'react-archer'
import Draggable from 'react-draggable'

import VideoNode from './VideoNode'

const StudioEditor = inject('nodeStore')(observer(
  class StudioEditor extends React.Component {

    createRelation = node => {
      if (!node.hasOwnProperty('next')) return []
      if (node.next.length === 0) return []
      let result = []
      node.next.forEach(child => {
        result.push({
          targetId: child.id,
          targetAnchor: 'left',
          sourceAnchor: 'right',
        })
      })
      return result
    }

    handleNodeClick = (event, id) => {
      event.stopPropagation()
      this.props.onNodeClick(id)
    }

    renderNodes = nodes => {
      return (
        <div className="nodes-column">
          {nodes.map(node => (
            <div key={node.id} className="nodes-row">
              <ArcherElement
                id={node.id}
                relations={this.createRelation(node)}
              >
                <div className="node-container">
                  <VideoNode
                    name={node.name}
                    onAdd={() => this.addNode(node.id)}
                    onDelete={() => this.deleteNode(node.id)}
                    onClick={e => this.handleNodeClick(e, node.id)}
                  />
                </div>
              </ArcherElement>
              {node.next && this.renderNodes(node.next)}
            </div>
          ))}
        </div>
      )
    }

    addNode = parentId => {
      this.props.nodeStore.addNode(parentId)
    }

    deleteNode = id => {
      this.props.nodeStore.deleteNode(id)
    }

    handleBackgroundClick = event => {
      event.preventDefault()
      this.props.onBackgroundClick()
    }

    render() {
      const nodes = toJS(this.props.nodeStore.nodeList)
      return (
        <div
          className="editor-container"
          onClick={this.handleBackgroundClick}
        >
          {nodes && (
            <Draggable positionOffset={{x: 0, y: 200}}>
              <div className="editor-draggable">
                <ArcherContainer
                  strokeColor="#BFBFBF"
                  strokeWidth="1"
                >
                  {this.renderNodes(nodes)}
                </ArcherContainer>
              </div>
            </Draggable>
          )}
        </div>
      )
    }
  }
))

export default StudioEditor
