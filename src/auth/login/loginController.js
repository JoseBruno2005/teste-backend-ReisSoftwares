import loginService from "../login/loginService.js";

export default async function loginController(req, res) {
    
    try{
        const {email, password} = req.body;

        const token = await loginService(email, password);

        res.status(201).json({
            token: token
        })

    }catch(erro){
        console.error("Erro Login Controller: ", erro)
        res.status(400).json({error: erro.message});
    }

}