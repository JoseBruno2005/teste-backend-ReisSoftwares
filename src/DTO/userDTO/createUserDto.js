import bcrypt from "bcryptjs";

export default async function createUserDto(userData){
    try{
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        console.log(userData)
        if(!userData.name || !userData.email || !userData.password){
            throw new Error("Todos os campos são obritórios!")
        }
        
        const userDTO = {
            name: userData.name,
            email: userData.email,
            password: hashedPassword
        }

        return userDTO;
    }catch(error){
        console.error("Erro prisma", error)
    }
}