import { createTaskRepository } from "./taskRepository";

async function createTaskService(taskDto) {
    try{
        return await createTaskRepository(taskDto);
    }catch(error){
        console.log(error)
        throw new Error("Erro createTaskService: " + error.message)
    }
}

export {createTaskService}