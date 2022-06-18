import React from 'react'
import ReactDOM from 'react-dom'

import {createStore} from 'redux'
import counter from './reducers'
import Counter from './components/Counter'

const store = createStore(
  counter,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
  )
const rootEl = document.getElementById('root')
console.log(store)

const render = () => ReactDOM.render(
  <Counter 
    value = {store.getState()}
    onIncrement={() => store.dispatch({ type: 'INCREMENT'})}
    onDecrement={() => store.dispatch({ type: 'DECREMENT'})}
  />,
  rootEl
)

render()
store.subscribe(render)
