const { getUsersService, getUsersIdService } = require("../services/user");


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
            return res.stauts(404).json({ message: "Not Found" })
        }

        return res. status(200).json(user);
    }catch(error){
        return res.status(500).json(error);
    }
}

module.exports = { getUsersController, getUsersByIdController }