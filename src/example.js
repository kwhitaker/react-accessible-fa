import React from 'react'
import ReactDOM from 'react-dom'
import { AccessibleFAIcon as Icon } from './AccessibleFAIcon'

class Example extends React.Component {
  render() {
    return (
      <Icon animations={['spin']} icon="spinner" size="2x">
        Loading...
      </Icon>
    )
  }
}

ReactDOM.render(<Example />, document.getElementById('example'))
