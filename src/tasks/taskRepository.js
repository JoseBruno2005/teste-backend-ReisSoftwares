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

export { createTaskRepository, listTasksRepository }