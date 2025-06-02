import { PrismaClient } from "@prisma/client";
import returnTaskDto from "../DTO/taskDTO/returnTaskDto";

const prisma = new PrismaClient();

async function createTaskRepository(taskData) {
    try{

        const createdTask = await prisma.task.create({
            title: taskData.title,
            description: taskData.description,
            status: taskData.status,
            dueDate: taskData.dueDate,
            userId: taskData.userId
        })

        const taskDto = returnTaskDto(createdTask);

        return taskDto;

    }catch(error){
        console.log("Erro ao criar tarefa: ", error);
        throw new Error("Erro repository createTask" + error.message)
    }
}

export {createTaskRepository}