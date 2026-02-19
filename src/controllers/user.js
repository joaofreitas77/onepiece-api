const { getUsersService } = require("../services/user");


const getUsersController = async (req, res) => {
    try {
        const data = await getUsersService(req.query.name)
        return res.status(200).json(data);
    } catch (error) {
        return res.status(500).json(error)
    }
}

module.exports = { getUsersController }