const { getUsersController, getUsersByIdController, postUsersController, putUsersController, deleteUsersController } = require("../controllers/user")
const { userRepository } = require("../repositories/user")

module.exports = (app) => {
    app.get('/', (req, res) => {
        res.send('<h1 style="color:red "> API de one piece </h1>')
    })

    app.get("/users", getUsersController)

    /*app.get("/users/:id", async (req, res) => {
        const id = Number(req.params.id)
        const idAlreadyExists = await userRepository.findOne({ where: { id: id } })

        if (idAlreadyExists) return res.status(200).json(idAlreadyExists)

        res.status(404).json({ message: "Not Found" })
    })*/

    app.get("/users/:id", getUsersByIdController)

    /*app.post("/users", async (req, res) => {
        const { name, fruit } = req.body;
        const getname = name.toLowerCase()
        if (!getname || !fruit) {
            return res.status(400).json({ message: "Name and fruit are required" })
        }
        const userAlreadyExists = await userRepository.findOne({ where: { name: getname } })
        if (userAlreadyExists) return res.status(409).json({ message: "User already exists" })

        const newUser = await userRepository.create({ name: getname, fruit })
        await userRepository.save(newUser);
        res.status(201).json({ message: "created" });
    })*/

    app.post("/users", postUsersController)

    /*app.put("/users/:id", async (req, res) => {
        const id = Number(req.params.id);
        let { name, fruit } = req.body;

        const user = await userRepository.findOne({ where: { id } })

        if (!user) {
            return res.status(404).json({ message: "Not found" });
        }

        if (!name || !fruit) {
            return res.status(400).json({ message: "Name and Fruit are required" })
        }

        if (!name.length) name = user.name; //users[findUser]["name"]
        if (!fruit.length) fruit = user.fruit; //users[findUser]["fruit"]

        user.name = name.toLowerCase();
        user.fruit = fruit;

        await userRepository.save(user);

        res.status(200).json([user]);
    })*/

    app.put("/users/:id", putUsersController)

    /*app.delete("/users/:id", async (req, res) => {
        const id = Number(req.params.id);
        const user = await userRepository.findOne({ where: { id } })
        if (!user) {
            return res.status(404).json({ message: "Not found" })
        }

        await userRepository.delete(id);

        return res.status(200).json({ message: "User deleted" });
    })*/

    app.delete("/users/:id", deleteUsersController)
}