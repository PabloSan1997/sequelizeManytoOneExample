import { project } from "../models/Project.js";
import {Model} from 'sequelize';
export const getProjects = async (req, res) => {
    const data = await project.findAll();
    res.json(data);
}

export const createProject =async (req, res) => {
   const {name, priority, description} = req.body;
   const nuevo = await project.create({name, priority, description});
   res.json(nuevo);
}