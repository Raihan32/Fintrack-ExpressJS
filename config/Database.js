import { Sequelize } from "sequelize";

const db = new Sequelize('fintrack','root','1234567',{
    host: "localhost",
    dialect: "mysql"
});

export default db;