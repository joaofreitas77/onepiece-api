const { Like } = require("typeorm");
const { userRepository } = require("../repositories/user");

const getUsersService = async (name) => {
    const filter = {}

    if (name) {
        filter.name = Like(`%${name}%`);
    }
    return await userRepository.find({ where: filter })
}

const getUsersIdService = async (id) => {
    const user = await userRepository.findOne({
        where: {id:  Number(id)}
    });

    return user;
}

module.exports = {
    getUsersService,
    getUsersIdService,
}