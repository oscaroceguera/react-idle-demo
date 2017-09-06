import React, { Component } from 'react'
import Idle from 'react-idle'

class App extends Component {
  render () {
    return (
      <Idle
        onChange={({idle}) => console.log({ idle })}
        render={({ idle }) =>
          <h1>
            {idle
              ? 'You are idle'
              : 'Stop doing stuff for 1 second'
            }
          </h1>
        }
      />
    )
  }
}

export default App
