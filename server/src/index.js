import express from 'express'
import React from 'react'
import { renderToString } from 'react-dom/server'
import Home from './client/components/Home'

const app = express()

const port = process.env.PORT || 3000

app.use(express.static('public'))

app.get('/', (req, res, next) => {
  const content = renderToString(<Home />)
  const html = `
    <html>
      <head></head>
      <body>
        <div>${content}</div>
        <script src='bundle.js'></script>
      </body>
    </html>
  `
  res.send(html)

})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})
