import React, { Component } from 'react'
import Idle from 'react-idle'

// How long before notifying that the user is idle in milliseconds.
class App extends Component {
  render () {
    return (
      <Idle
        onChange={({idle}) => console.log({ idle })}
        timeout={5000}
        render={({ idle }) =>
          <h1>
            {idle
              ? 'You are idle'
              : 'Stop doing stuff for 2 second'
            }
          </h1>
        }
      />
    )
  }
}

export default App
