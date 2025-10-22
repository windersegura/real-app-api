import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();



export const getAllUsers = async () => {
    return await prisma.user.findMany();
}