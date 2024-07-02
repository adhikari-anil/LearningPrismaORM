import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function insertTodos(title: string, done: boolean, description: string, user_id: number) {
    const response = await prisma.todos.create({
        data: {
            title,
            done,
            description,
            user_id
        },
        select: {
            id: true,
            done: true
        }
    })
    console.log(response);
}

insertTodos("Learning Prisma", false, "Here I am learning it..", 3);