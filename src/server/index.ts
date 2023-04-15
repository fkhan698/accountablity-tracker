import express from 'express'
import router from '../routes'

const app = express()
const cors = require('cors');

app.use(cors())
app.use(express.json())
app.use(express.urlencoded())
app.use(router)

export default app
