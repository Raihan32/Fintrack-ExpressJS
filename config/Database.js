import { Sequelize } from "sequelize";

const db = new Sequelize('fintrack','root','Dora1932',{
    host: "localhost",
    dialect: "mysql"
});

export default db;