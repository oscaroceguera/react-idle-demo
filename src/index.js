import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import registerServiceWorker from './registerServiceWorker'
import Idle from 'react-idle'

ReactDOM.render(<App />, document.getElementById('root'))
registerServiceWorker()
