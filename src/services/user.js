const { Like } = require("typeorm");
const { userRepository } = require("../repositories/user");

const getUsersService = async (name) => {
    const filter = {}

    if (name) {
        filter.name = Like(`%${name}%`);
    }
    return await userRepository.find({ where: filter })
}

module.exports = { getUsersService }