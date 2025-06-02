import { registerUser } from '../register/registerRepository.js';

export default async function registerService(userDTO) {
        try {
                return await registerUser(userDTO);
        }catch(error){
                console.log(error)
                throw new Error("Erro service: " + error.message)
        }
}