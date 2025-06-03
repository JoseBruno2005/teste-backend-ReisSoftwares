import { PrismaClient } from "@prisma/client";
import returnTaskDto from "../DTO/taskDTO/returnTaskDto.js";

const prisma = new PrismaClient();

async function createTaskRepository(taskData) {
    try {

        const createdTask = await prisma.task.create({
            data: {
                title: taskData.title,
                description: taskData.description,
                status: taskData.status,
                dueDate: taskData.dueDate,
                userId: taskData.userId
            }
        })

        const taskDto = returnTaskDto(createdTask);

        return taskDto;

    } catch (error) {
        console.log("Erro ao criar tarefa: ", error);
        throw new Error("Erro repository createTask" + error.message)
    }
}

async function listTasksRepository(){
    try{

        const listTasks = await prisma.task.findMany();

        const listTasksDtos = listTasks.map(task => {
            return returnTaskDto(task)
        });

        return listTasksDtos;

    }catch(error){
        throw new Error("Error listTasksRepository: " + error)
    }
}

async function findTaskByIdRepository(taskId){
    try{

        const foundTask = await prisma.task.findFirst({
            where: {id: taskId}
        });

        const taskDto = returnTaskDto(foundTask);

        return taskDto;

    }catch(error){
        throw new Error("Error findTaskByIdRepository: " + error)
    }
}

async function findTaskByStatusRepository(taskStatus) {
    try{

        const listTask = await prisma.task.findMany({
            where: {status: taskStatus}
        });

        const listTasksDtos = listTask.map(task => {
            return returnTaskDto(task);
        });

        return listTasksDtos;

    }catch(error){
        throw new Error("Error findTaskByStatusRepository: " + error)
    }
}

async function deleteTaskRepository(taskId) {
    try{

        const deletedTasks = await prisma.task.delete({
            where: {
                id: taskId
            }
        });

        const taskDto = returnTaskDto(deletedTasks);

        return taskDto;

    }catch(error){
        throw new Error("Error deleteTaskRepository: " + error)
    }
}

export { createTaskRepository, listTasksRepository, deleteTaskRepository, 
    findTaskByIdRepository, findTaskByStatusRepository }