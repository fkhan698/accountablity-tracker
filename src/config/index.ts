import dotenv from 'dotenv'

const environment = process.env.NODE_ENV

if (environment !== 'production') {
  dotenv.config({ path: `${__dirname}/../.env` })
}

const developmentConfig = {
  db: {
    uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/test',
  },
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000,
  },
  jwt: {
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  },
}

const productionConfig = {
  db: {
    uri: process.env.DB_URI || 'mongodb://127.0.0.1:27017/test',
  },
  server: {
    host: process.env.HOST || 'localhost',
    port: process.env.PORT || 8000,
  },
  jwt: {
    privateKey: process.env.JWT_PRIVATE_KEY,
    publicKey: process.env.JWT_PUBLIC_KEY,
  },
}

const config = (environment === 'production') ? productionConfig : developmentConfig

export default config
