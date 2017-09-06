import React, { Component } from 'react'
import Idle from 'react-idle'

// How long before notifying that the user is idle in milliseconds.
class App extends Component {
  state = {
    cornifyLoaded: false
  }

  componentWillMount () {
    console.log('componentWillMount')
  }

  preloadCornify = () => {
    const script = document.createElement('script')
    script.onload = () => this.setState({ cornifyLoaded: true })
    script.src = '//www.cornify.com/js/cornify.js'
    document.body.appendChild(script)
  }

  cornify = () => {
    window.cornify_add()
  }

  render () {
    return (
      <div>
        {this.state.cornifyLoaded === false && (
          <Idle onChange={({ idle }) => {
            if (idle) {
              this.preloadCornify()
            }
          }}/>
        )}

        <button
          disabled={!this.state.cornifyLoaded}
          onClick={this.cornify}
        >
          MAke Some HAppiness
        </button>
      </div>
    )
  }
}

export default App
