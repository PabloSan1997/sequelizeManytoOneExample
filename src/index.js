import { app } from "./app.js";
import { project } from "./models/Project.js";
import { tasks } from "./models/Tasck.js";
import { variables } from "./utilities/variables.js";

async function main(){
    try {
        await project.sync();
        await tasks.sync();
        app.listen(variables.PORT,()=>{
            console.log(`http://localhost:${variables.PORT}`);
        });
    } catch (error) {
        console.log('error con la base de datos');
    }
}

main();
