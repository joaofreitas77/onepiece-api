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

const postUsersService = async (name, fruit) => {
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

const putUsersService = async (id, name, fruit) => {
    const user = await userRepository.findOne({ where: { id: Number(id) } })

    if (!user) {
        return null;
    }
    if (!name || !fruit) {
        throw new Error("Name and fruit are required")
    }
    if (name) {
        user.name = name.toLowerCase()
    }
    if (fruit) {
        user.fruit = fruit
    }

    await userRepository.save(user)
    return user
}

const deleteUsersService = async (id) => {
    const user = await userRepository.findOne({ where: { id: Number(id) } })

    if(!user){
        return null
    }

    await userRepository.delete(id)
    return true;
}

module.exports = {
    getUsersService,
    getUsersIdService,
    postUsersService,
    putUsersService,
    deleteUsersService,
}