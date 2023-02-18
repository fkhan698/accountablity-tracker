import express from "express"
import connectDB from "./db"
import config from "./config"

const app = express()

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use((req, res, next) => {
  // Log the req
  console.log(
    `Incomming - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}]`
  )

  res.on("finish", () => {
    // Log the res
    console.log(
      `Result - METHOD: [${req.method}] - URL: [${req.url}] - IP: [${req.socket.remoteAddress}] - STATUS: [${res.statusCode}]`
    )
  })

  next()
})

// Rules of our API
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*")
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept, Authorization"
  )

  if (req.method == "OPTIONS") {
    res.header(
      "Access-Control-Allow-Methods",
      "PUT, POST, PATCH, DELETE, GET"
    )
    return res.status(200).json({})
  }

  next()
})

// Error handling
app.use((err, res, next) => {
  const error = new Error("Not found")

  res.status(404).json({
    message: error.message
  })
})

app.listen(config.server.port, () => {
  connectDB()
  console.log(`Server is running on port ${config.server.port}`)
})
