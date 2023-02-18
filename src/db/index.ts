import mongoose from 'mongoose'
import config from '../config'

const { url } = config.mongo
const db = mongoose.connection

db.on('connecting', () => {
  console.log('connecting')
})
db.on('connected', () => {
  console.log('connected')
})
db.on('open', () => {
  console.log('open')
})
db.on('disconneted', () => {
  console.log('disconnected')
})
db.on('close', () => {
  console.log('close')
})
db.on('reconnected', () => {
  console.log('reconnected')
})
db.on('error', (error) => {
  console.log(error)
})
db.on('fullsetup', () => {
  console.log('fullsetup')
})
db.on('all', () => {
  console.log('all')
})

export default function connectDB() {
  mongoose.set('strictQuery', true)
  mongoose.connect(url).catch((err) => {
    if (err) console.log('error connecting db')
  })
  return db
}