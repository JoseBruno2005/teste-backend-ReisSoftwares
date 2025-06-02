import { createTaskRepository, listTasksRepository } from "./taskRepository.js";

async function createTaskService(taskDto) {
    try{
        return await createTaskRepository(taskDto);
    }catch(error){
        console.log(error)
        throw new Error("Erro createTaskService: " + error.message)
    }
}

async function listTasksService() {
    try{
        return await listTasksRepository();
    }catch(error){
        console.log(error)
        throw new Error("Erro listTasksService: " + error.message)
    }
}

export {createTaskService, listTasksService}