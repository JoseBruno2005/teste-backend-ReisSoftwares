import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import {searchUniqueUser} from "../login/loginRepository.js";
import dotenv from 'dotenv';

dotenv.config();

const SECRET_KEY = process.env.SECRET_KEY;
const EXPIRATION_TIME = "1h";

export default async function loginService(email, password) {

    try {
        const user = await searchUniqueUser(email);

        if (!user) {
            throw new Error("Usuario não existe no banco")
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            throw new Error("Senha inválida!")
        }

        const token = jwt.sign({userId: user.id, role: user.role}, SECRET_KEY, {expiresIn: EXPIRATION_TIME});
        return token;

    } catch (error) {
        console.error("Erro: ", error)
        throw new Error("Erro ao fazer login!");
    }

}