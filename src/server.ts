import express from 'express'

import './database/connection'

const app = express()

app.use(express.json())

app.get('/users', () => {
  console.log('teste')
})

app.listen(3333, () => {
  console.log('App is running on port 3333')
})