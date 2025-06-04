import createTaskDto from "../DTO/taskDTO/createTaskDto.js"
import returnTaskDto from "../DTO/taskDTO/returnTaskDto.js";
import { createTaskService, deleteTaskService, findTaskByIdService, listTasksService, findTaskByStatusService, updateTaskService } from "./taskService.js";

async function createTaskController(req, res) {
    try{

        const taskData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate,
            userId: req.user.userId
        }

        const taskDto = createTaskDto(taskData);

        const taskCreated = await createTaskService(taskDto);

        return res.status(201).json({
            message: "Tarefa criada com sucesso!",
            taskCreated: taskCreated
        })

    }catch(error){
        res.status(400).json({
            message: "Erro ao criar tarefa" + error.message
        })
    }
}

async function findTaskByIdController(req, res) {
    try{

        const {id} = req.params;

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

async function findTaskByStatusController(req, res) {
    try{

        const {status} = req.query;

        let listTasksDtos;

        if(!status){
            listTasksDtos = await listTasksService();
        }else{
            listTasksDtos = await findTaskByStatusService(status);
        }

        res.status(200).json({
            message: "Tarefas encontradas:",
            listTasks: listTasksDtos 
        })

    }catch(error){
        console.error(error)
        res.status(400).json({
            message: "Erro ao buscar tarefas" + error.message
        })
    }
}

async function updateTaskController(req, res) {
    try{

        const {id} = req.params;

        const taskData = {
            title: req.body.title,
            description: req.body.description,
            status: req.body.status,
            dueDate: req.body.dueDate,
            userId: req.user.userId
        }

        const updatedTaskDto = await updateTaskService(id, taskData);

        res.status(200).json({
            message: "Tarefa atualizada:",
            update: updatedTaskDto 
        })

    }catch(error){
        console.error(error)
        res.status(400).json({
            message: "Erro ao atualizar tarefa" + error.message
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

export {createTaskController, deleteTasksController, 
    findTaskByIdController, findTaskByStatusController, updateTaskController}