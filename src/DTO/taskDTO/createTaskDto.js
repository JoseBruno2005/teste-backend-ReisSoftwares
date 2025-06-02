export default function createTaskDto(taskData) {

    try {
        if(!taskData.title || !taskData.description || 
            !taskData.status || !taskData.dueDate || !taskData.userId)
            {
                throw new Error("Todos os campos são obrigatórios para a criação da tarefa!")
        }

        const taskDto = {
            title: taskData.title,
            description: taskData.description,
            status: taskData.status,
            dueDate: taskData.dueDate,
            userId: taskData.userId
        }

        return taskDto;
    } catch (error) {
        console.error(error);
    }

}