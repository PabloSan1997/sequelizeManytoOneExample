import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";


export const tasks = sequelize.define(
  "task",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    done: {
      type: DataTypes.BOOLEAN,
      defaulValue: false,
      allowNull:false
    },

  },
  {
    timestamps: false,
  }
);

