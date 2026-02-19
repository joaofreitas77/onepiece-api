const { EntitySchema } = require('typeorm');
const { AppDataSource } = require('../config/db');

const User = new EntitySchema({
    name: "pirate",
    tableName: "pirate",
    columns: {
        id: {
            primary: true,
            type: "int",
            generated: "increment"
        },
        name: {
            type: "varchar",
            nullable: false
        },
        fruit: {
            type: "varchar"
        }
    }
})

module.exports = { User };