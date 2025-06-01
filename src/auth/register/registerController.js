import registerService from "../register/registerService.js";

export default async function registerController(req, res) {
    try{
        const user = req.body;

        const userData = {
            name: user.name,
            email: user.email,
            password: user.password,
        }

        const userReturn = await registerService(userData);

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