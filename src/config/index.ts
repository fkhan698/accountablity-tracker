import dotenv from 'dotenv'

const environment = process.env.NODE_ENV

if (environment !== 'production') {
  dotenv.config({ path: `${__dirname}/../../.env` })
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
  emailAuth: {
    rootEmail: process.env.ROOT_EMAIL,
    rootPass: process.env.EMAIL_PASSWORD,
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
  emailAuth: {
    rootEmail: process.env.ROOT_EMAIL,
    rootPass: process.env.EMAIL_PASSWORD,
  },
}

const config = environment === 'production' ? productionConfig : developmentConfig

export default config
