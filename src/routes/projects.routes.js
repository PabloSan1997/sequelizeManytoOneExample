import express from 'express';
import { createProject, getProjects } from '../controllers/project.controller.js';

const router = express.Router();

router.get('/', getProjects);
 router.post('/', createProject);
// router.delete();
// router.put();
// router.delete();

export default router;