export default function createTaskDto(taskData) {
    console.log(taskData)
    if (!taskData.title || !taskData.description || !taskData.dueDate || !taskData.userId) {
        throw new Error(" Todos os campos são obrigatórios para a tarefa, exeto status!")
    }

    const taskDto = {
        title: taskData.title,
        description: taskData.description,
        status: taskData.status || "pending",
        dueDate: new Date(taskData.dueDate),
        userId: taskData.userId,
    };

    return taskDto;

}