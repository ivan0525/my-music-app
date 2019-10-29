import React from 'react'
import ReactDOM from 'react-dom'
import './api/HTTPAdapter'
import App from './App'
import * as serviceWorker from './serviceWorker'
import axios from 'axios'
ReactDOM.render(<App />, document.getElementById('root'))
console.log(axios.defaults.baseURL)
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
