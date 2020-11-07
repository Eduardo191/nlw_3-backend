import express from 'express'

const app = express()

app.get('/users', () => {
  console.log('teste')
})

app.listen(3333, () => {
  console.log('App is running on port 3333')
})