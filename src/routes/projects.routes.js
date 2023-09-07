import express from "express";
import {
  createProject,
  deleteProject,
  getOneProject,
  getProjects,
  getTaskbyProject,
  updateProject,
} from "../controllers/project.controller.js";

const router = express.Router();

router.get("/", getProjects);
router.get('/tasks/:id', getTaskbyProject);
router.get('/:id', getOneProject);
router.post("/", createProject);
router.put("/", updateProject);
router.delete("/:id", deleteProject);

export default router;
