export default function returnTaskDto(task) {
  const { id, title, description, status, dueDate, userId, createdAt, updatedAt } = task;
  return { id, title, description, status, dueDate, userId, createdAt, updatedAt};
}