import { PrismaClient } from "@prisma/client";
import returnUserDto from "../../DTO/userDTO/returnUserDto.js";

const prisma = new PrismaClient();

async function registerUser(userData) {
    try {
        const user = await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
            }
        });

        const userDto = returnUserDto(user);

        return userDto;
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuário: " + error.message);
    }
}

export { registerUser };