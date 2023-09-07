import Sequelize from "sequelize";
import { variables } from "../utilities/variables.js";

const URL_DATABASE = variables.URL_DATABASE;

export const sequelize = new Sequelize(URL_DATABASE, {
    dialect:'postgres',
    loggin:true
});
