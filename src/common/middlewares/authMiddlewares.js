import jwt from "jsonwebtoken";

export default function authMiddleware(req, res, next){

    const token = req.header('Authorization')?.replace('Bearer', '').trim();

    if(!token){
        return res.status(401).json({
            error: "Token não fornecido"
        });
    }

    try{

        const decoded = jwt.verify(token, process.env.SECRET_KEY);
        req.user = decoded;
        next();

    }catch(error){
        res.status(401).json({
            error: "Token inválido"
        });
    }

}