import React from 'react'

class Keypad extends React.Component {
  constructor() {
    super()
    this.logPass = this.logPass.bind(this)
  }
  logPass() {
    console.log('Entering password...')
  }
  render() {
    return (
      <input type="password" onKeyUp={this.logPass} placeholder="password"/>
    )
  }
}

export default Keypad
