import bcrypt from "bcryptjs";

export default async function createUserDto(userData){
    try{
        const hashedPassword = await bcrypt.hash(userData.password, 10);
        
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