const { getUsersService, getUsersIdService, postUsersService, putUsersService, deleteUsersService } = require("../services/user");


const getUsersController = async (req, res) => {
    try {
        const data = await getUsersService(req.query.name)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
};

const getUsersByIdController = async (req, res) => {
    try {
        const user = await getUsersIdService(req.params.id);

        if (!user) {
            return res.status(404).json({ message: "Not Found" })
        }

        return res.status(200).json(user);
    } catch (error) {
        return res.status(500).json(error);
    }
}

const postUsersController = async (req, res) => {
    try {
        const { name, fruit } = req.body;
        const newUser = await postUsersService(name, fruit);

        return res.status(201).json(newUser);
    } catch (error) {
        if (error.message === "Name and fruit are required") {
            return res.status(400).json({ message: error.message })
        }
        if (error.message === "User already exists") {
            return res.status(409).json({ message: error.message })
        }
        console.error(error)
        return res.status(500).json({ message: "Internal server error" })
    }
}

const putUsersController = async (req, res) => {
    try {
        const { id } = req.params;
        const { name, fruit } = req.body;
        const updateUser = await putUsersService(id, name, fruit);

        if (!updateUser) {
            return res.stauts(404).json({ message: "Not Found" })
        }

        return res.status(201).json(updateUser);
    } catch (error) {
        return res.status(400).json({ message: error.message })
    }
}

const deleteUsersController = async (req, res) => {
    try {
        const { id } = req.params;
        const deleteUser = await deleteUsersService(id);

        if (!deleteUser) {
            return res.status(404).json({ message: "Not Found" });
        }

        return res.status(200).json({ message: "User deleted" });

    } catch (error) {
        return res.status(500).json({ message: "Internal Server Error" })
    }
}

module.exports = { getUsersController, getUsersByIdController, postUsersController, putUsersController, deleteUsersController }