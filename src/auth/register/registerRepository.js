import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function createUser(userData) {
    try {
        const user = await prisma.user.create({
            data: {
                name: userData.name,
                email: userData.email,
                password: userData.password,
            }
        });

        return user;
    } catch (error) {
        throw new Error("Erro ao cadastrar o usuario: ", error);
    }
}

export { createUser };