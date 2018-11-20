const express = require('express')
const cors = require('cors')
const {
  db
} = require('./database/index')

const app = express()

app.use(cors());
app.use(express.json())
app.use(express.urlencoded({
  extended: true
}))

app.use('/api/articles', require('./Routes/article'))
app.use('/api', require('./Routes/comment'))
app.use('/api', require('./Routes/users'))


db.sync()
  .then(() => {
    console.log('Database synced')
    app.listen(3939, () => {
      console.log('Server started http://localhost:3939')
    })
  })
  .catch(console.error)