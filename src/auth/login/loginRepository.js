import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function searchUniqueUser(email) {
    try{
        const user = await prisma.user.findUnique({
            where: {email}
        })

        return user;
    }catch(error){
        throw new Error("Erro ao buscar o usuário: ", error)
    }
}

export {searchUniqueUser}