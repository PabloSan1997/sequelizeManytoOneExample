import { project } from "../models/Project.js";
import { tasks } from "../models/Tasck.js";

export const getProjects = async (req, res) => {
  const data = await project.findAll();
  res.json(data);
};

export const getOneProject = async (req, res)=>{
    const data = await project.findByPk(req.params.id);
    res.json(data);
}

export const getTaskbyProject = async (req, res)=>{
  const {id} = req.params;
  const data = await tasks.findAll({
    where:{
      projectId: id
    }
  });
  res.json(data);
}

export const createProject = async (req, res) => {
  try {
    const { name, priority, description } = req.body;
    const nuevo = await project.create({ name, priority, description });
    res.status(201).json(nuevo);
  } catch (error) {
    res.status(400).json({ message: "No se pueden agregar datos" });
  }
};



export const updateProject = async (req, res) => {
  try {
    const { id, name, priority, description } = req.body;
    const data = await project.findByPk(id);
    if (!data) {
      throw "error";
    }
    data.set(req.body);
    await data.save();
    res.json(data);
  } catch (error) {
    res.status(400).json({ message: "No se pueden actualizar datos" });
  }
};


export const deleteProject = async (req, res) => {
  try {
    const { id } = req.params;
    await tasks.destroy({
      where:{
        projectId:id
      }
    });
    await project.destroy({
      where: {
        id,
      },
    });
    res.status(202).json({ message: "Se borró elemento" });
  } catch (error) {
    res.status(400).json({ message: "No se pueden actualizar datos" });
  }
};
