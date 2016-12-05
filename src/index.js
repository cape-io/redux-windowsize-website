import { createElement } from 'react'
import { render } from 'react-dom'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import { createSizeAction, listenSize } from 'redux-windowsize'
import reducers from './reducers'
import App from './App'
import './index.css'

/* global window */

// Check if zalmoxisus/redux-devtools-extension installed and enable if so.
/* eslint-disable no-underscore-dangle */
const reduxDev = window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
/* eslint-enable */

// Configure and create our Redux store.
const store = createStore(reducers, reduxDev)
// Update redux with current size.
store.dispatch(createSizeAction(window))
// Dispatch an action every 50ms when window size changes.
listenSize(store.dispatch, window, 50)

// Define our destination where we insert our root react component.
const destEl = window.document.getElementById('root')
const reactRoot = createElement(Provider, { store }, createElement(App, null))

render(reactRoot, destEl)
