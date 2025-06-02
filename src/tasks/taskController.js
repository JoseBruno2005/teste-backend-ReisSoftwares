import createTaskDto from "../DTO/taskDTO/createTaskDto.js"
import { createTaskService, deleteTaskService, findTaskByIdService, listTasksService } from "./taskService.js";

async function createTaskController(req, res) {
    try{

        const taskDto = createTaskDto(req.body);

        const taskCreated = await createTaskService(taskDto);

        return res.status(200).json({
            message: "Tarefa criada com sucesso!",
            taskCreated: taskCreated
        })

    }catch(error){
        res.status(400).json({
            message: "Erro ao criar tarefa" + error.message
        })
    }
}

async function listTasksController(req, res) {
    try{

        const listTasksDtos = await listTasksService(); 

        res.status(200).json({
            message: "Tarefas encontradas:",
            list: listTasksDtos
        })
    }catch(error){
        res.status(400).json({
            message: "Erro ao buscar tarefas" + error.message
        })
    }
}

async function findTaskByIdController(req, res) {
    try{

        const {id} = req.params;
        console.log(id)

        const tasksDto = await findTaskByIdService(id); 

        res.status(200).json({
            message: "Tarefa encontrada:",
            task: tasksDto 
        })
    }catch(error){
        console.error(error)
        res.status(400).json({
            message: "Erro ao buscar tarefa" + error.message
        })
    }
}

async function deleteTasksController(req, res) {
    try{

        const {id} = req.params;

        const taskDto = await deleteTaskService(id);

        res.status(200).json({
            message: "Tarefas deletada:",
            task: taskDto
        })
    }catch(error){
        res.status(400).json({
            message: "Erro ao buscar tarefas" + error.message
        })
    }
}

export {createTaskController, listTasksController, deleteTasksController, findTaskByIdController}