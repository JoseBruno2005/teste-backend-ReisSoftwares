import registerService from "../register/registerService.js";
import createUserDto from "../../DTO/userDTO/createUserDto.js";

export default async function registerController(req, res) {
    try{
        const user = req.body;

        const userDto = await createUserDto(user);

        const userReturn = await registerService(userDto);

        res.status(201).json(
            {
                message: "Novo usuário criado com sucesso",
                user: userReturn
            })
        
    }catch(error){
        console.error("Error ao registar o novo usuário", error);
        res.status(400).json({error: error.message})
    }
}