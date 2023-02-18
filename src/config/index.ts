import dotenv from "dotenv";
dotenv.config();

const config = {
  mongo: {
    url: process.env.MONGO_URL || "mongodb://127.0.0.1:27017/test"
  },
  server: {
    port: process.env.SERVER_PORT? Number(process.env.SERVER_PORT): 1337
  }
};

export default config;
