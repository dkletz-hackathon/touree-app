import React from 'react'

export default class VideoNode extends React.Component {
  state = {
    popup: false,
  }

  togglePopup = event => {
    this.setState({popup: !this.state.popup})
    event.preventDefault()
  }

  add = event => {
    this.props.onAdd()
    event.stopPropagation()
  }

  delete = event => {
    this.props.onDelete()
    event.stopPropagation()
  }

  render() {
    const { style, name } = this.props
    return (
      <>
        {this.state.popup && (
          <div className="video-option">
            <button onClick={e => this.delete(e)}>
              Delete node
            </button>
          </div>
        )}
        <div
          className="video-node"
          style={style}
          onClick={this.props.onClick}
          onContextMenu={this.togglePopup}
        >
          <p>{name}</p>
          <button onClick={e => this.add(e)}>
            +
          </button>
        </div>
      </>
    )
  }
}
