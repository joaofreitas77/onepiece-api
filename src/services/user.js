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
        where: { id: Number(id) }
    });

    return user;
}

const postUsers = async (name, fruit) => {
    const getname = name.toLowerCase()
    if (!getname || !fruit) {
        throw new Error("Name and fruit are required")
    }

    const userAlreadyExists = await userRepository.findOne({ where: { name: getname } })
    if (userAlreadyExists) {
        throw new Error("User already exists");
    }

    const newUser = await userRepository.create({ name: getname, fruit })
    await userRepository.save(newUser)
    return newUser
}

module.exports = {
    getUsersService,
    getUsersIdService,
    postUsers,
}