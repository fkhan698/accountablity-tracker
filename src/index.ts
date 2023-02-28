import app from './server'
import connectDB from './db'
import config from './config'

const { port, host } = config.server

app.get('/', (req, res) => {
  res.send('Home Page')
})

app.listen(port, () => {
  connectDB()
  console.log(`Listening to http://${host}:${port}`)
})
