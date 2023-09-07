import express from 'express';
import proyectsRoutes from './routes/projects.routes.js';
const app = express();

app.use(express.json());

app.use('/projects', proyectsRoutes);

app.get('/',(req, res)=>{
    res.json({message:'hla'})
});

export {app};