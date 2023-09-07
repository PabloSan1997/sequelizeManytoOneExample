import { DataTypes } from "sequelize";
import { sequelize } from "../database/db.js";
import { tasks } from "./Tasck.js";

export const project = sequelize.define(
  "project",
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
    priority: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    timestamps: true,
  }
);

project.hasMany(tasks, {
    foreignKey: 'projectId',
    sourceKey:'id'
});
tasks.belongsTo(project, {
    foreignKey: 'projectId',
    targetId:'id'
});
