import bcrypt from "bcryptjs";
import {createUser} from '../register/registerRepository.js';

export default async function registerService(userData){
    try{
        const hashedPassword = await bcrypt.hash(userData.password, 10);

        userData.password = hashedPassword;
        const user = await createUser(userData);
        
        return user;
    }catch(error){
        console.error("Erro prisma", error)
    }
}