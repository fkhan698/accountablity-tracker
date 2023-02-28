import bcrypt from "bcrypt"
import User from "../models/User"
import { IUser } from "../models/IUser"

const addUser = async (user: IUser) => {
  const userFound = await User.findOne({ email: user.email }, { password: 0 })
  if (userFound) {
    console.log("User already exists")
    return
  }

  const userToRegister = user
  bcrypt
    .genSalt(10)
    .then((salt) => {
      bcrypt
        .hash(user.password.toString(), salt)
        .then((hash) => {
          userToRegister.password = hash
          User.create(userToRegister)
            .then((doc) => {
              console.log(`User Added! ${doc.toJSON().email}`)
            })
            .catch((err) => {
              console.log(`User was not added. ${userToRegister.email}\n${err}`)
            })
        })
        .catch((err) => {
          console.log(`Hash did not work. ${userToRegister.email}\n${err}`)
        })
    })
    .catch((err) => {
      console.log(`Salt wasn't generated. ${userToRegister.email}\n${err}`)
    })
}

export default addUser
