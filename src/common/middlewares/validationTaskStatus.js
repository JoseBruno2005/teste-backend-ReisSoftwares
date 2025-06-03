export default function validationTaskStatus(req, res, next){
    try{

        const status = req.body.status;

        if(status !== "pending" && status !== "completed"){
            throw new Error("Status da tarefa inválido!")
        }

        return next();

    }catch(error){
        res.status(400).json({
            erro: "Não foi possível validar o campo status. " + error.message
        })
    }
}