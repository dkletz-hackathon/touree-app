import React, { Component } from "react"

class ProgressBar extends Component {
  render() {
    const { value, total } = this.props
    const completed = (value / total * 100).toFixed(0)

    const containerStyles = {
      height: '100%',
      width: '100%',
      backgroundColor: "#fff4fb",
    }

    const fillerStyles = {
      display: "flex",
      flexDirection: "column",
      justifyContent: "center",
      height: '100%',
      width: `${completed}%`,
      backgroundColor: '#ff968f',
      borderRadius: 'inherit',
      textAlign: 'right'
    }

    const labelHeading = {
      color: 'white',
      fontSize: "0.8rem"
    }

    return (
      <div style={containerStyles}>
        <div style={fillerStyles}>
          <div style={labelHeading}>{`${completed}%`}</div>
        </div>
      </div>
    )
  }
}

export default ProgressBar
