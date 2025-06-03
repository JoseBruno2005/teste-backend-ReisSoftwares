import { createTaskRepository, deleteTaskRepository, findTaskByIdRepository, 
    findTaskByStatusRepository, listTasksRepository, updateTaskRepository } from "./taskRepository.js";

async function createTaskService(taskDto) {
    try {
        return await createTaskRepository(taskDto);
    } catch (error) {
        console.log(error)
        throw new Error("Erro createTaskService: " + error.message)
    }
}

async function listTasksService() {
    try {
        return await listTasksRepository();
    } catch (error) {
        console.log(error)
        throw new Error("Erro listTasksService: " + error.message)
    }
}

async function findTaskByIdService(taskId) {
    try {
        return await findTaskByIdRepository(taskId);
    } catch (error) {
        console.log(error)
        throw new Error("Erro findTaskByIdService: " + error.message)
    }
}

async function findTaskByStatusService(status) {
    try {
        return await findTaskByStatusRepository(status);
    } catch (error) {
        console.log(error)
        throw new Error("Erro findTaskByStatusService: " + error.message)
    }
}

async function updateTaskService(id, taskData) {
    try {
        const allowedFields = ['title', 'description', 'status', 'dueDate']

        const filteredData = Object.fromEntries(
            Object.entries(taskData).filter(([key]) => allowedFields.includes(key))
        );

        const updatedTaskDto = await updateTaskRepository(id, filteredData);

        return updatedTaskDto;

    } catch (error) {
        console.log(error)
        throw new Error("Erro updateTaskService: " + error.message)
    }
}

async function deleteTaskService(taskId) {
    try {
        return await deleteTaskRepository(taskId);
    } catch (error) {
        console.log(error)
        throw new Error("Erro listTasksService: " + error.message)
    }
}

export {
    createTaskService, listTasksService, deleteTaskService,
    findTaskByIdService, findTaskByStatusService, updateTaskService
}