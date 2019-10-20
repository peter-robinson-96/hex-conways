const express = require('express')
const server = express()
// const path = require('path')

server.get('/', (req, res) => {
  res.send('Welcome to Conways HEX game of life!')
})

module.exports = server
