require('dotenv').config();
const { DataSource } = require('typeorm');
const { User } = require('../entities/user');


const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: process.env.DB_PORT,
    username: "postgres",
    password: "1234",
    database: "api_one_piece",
    synchronize: true,
    logging: false,
    entities: [User],
    migrations: [],
    subscribers: [],
})

AppDataSource.initialize().then(function () {
    console.log("Conexão com o banco de dados estabelecida com sucesso!");
})
    .catch(function (error) {
        console.log("Erro durante a inicialização do DataSource:", error);
    })

module.exports = { AppDataSource }