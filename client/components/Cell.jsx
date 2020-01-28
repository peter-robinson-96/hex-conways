// This component is a clickable cell. It can be clicked to be alive (status: true) or dead (status: false). Status will be a property of state, this will be a stateful component.
import React from 'react'

class Cell extends React.Component {
  state = {
    status: false,
    style: {
      height: 30,
      width: 30,
      borderRadius: '50%',
      backgroundColor: 'gray'
    }
  }

  toggleStyle = () => {
    if (this.state.status === false) {
      this.setState({ status: true,
        style: {
          height: 30,
          width: 30,
          borderRadius: '50%',
          backgroundColor: 'green'
        } })
    } else {
      this.setState({ status: false,
        style: {
          height: 30,
          width: 30,
          borderRadius: '50%',
          backgroundColor: 'gray'
        } })
    }
  }

  render () {
    return <React.Fragment>
      <div style={this.state.style} onClick={this.toggleStyle}>

      </div>
    </React.Fragment>
  }
}

export default Cell
