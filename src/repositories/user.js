const { AppDataSource } = require("../config/db")
const userRepository = AppDataSource.getRepository("pirate")

module.exports = {userRepository}