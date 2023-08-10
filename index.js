const express = require('express')
const app = express()
const port = 3000

app.set("view engine", "ejs")

app.get('/', (req, res) => {
  // res.send('Hello World!')
  let title = "My Home Page"
  res.render('index', { "title": title })
})

app.get('/about', (req, res) => {
  res.send('About Page!!!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})