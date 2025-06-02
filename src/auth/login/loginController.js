import loginService from "../login/loginService.js";
import loginUserDto from "../../DTO/userDTO/loginUserDto.js";

export default async function loginController(req, res) {
    
    try{
        const userDto = loginUserDto(req.body)

        const token = await loginService(userDto.email, userDto.password);

        res.status(201).json({
            token: token
        })

    }catch(erro){
        console.error("Erro Login Controller: ", erro)
        res.status(400).json({
            error: erro.message
        });
    }

}