import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import counter from './reducers'

const store = createStore(counter)

ReactDOM.render(<App />, document.getElementById('root'))
