import React from 'react'
import App from './components/App'
import ReactDom from 'react-dom'

document.addEventListener('DOMContentLoaded', () => {
  ReactDom.render(
    <App/>,
    document.getElementById('app'))
})
