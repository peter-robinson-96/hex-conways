const express = require('express')
const server = express()
const path = require('path')

// server.get('/', (req, res) => {
//   res.send('Welcome to Conways HEX game of life!')
// })

server.use(express.json())
server.use(express.static(path.join(__dirname, '../public')))

module.exports = server
