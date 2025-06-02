export default function returnUserDto(userData){
    const { id, name, email, createdAt } = userData;
    return { id, name, email, createdAt };
}