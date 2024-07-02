// This holds relationships in prism. As here we will use one to many relation...

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function todoandUser(user_id: number) {
    const response = await prisma.todos.findMany({
        where: {
            user_id
        },
        select: {
            user: true,
            title: true,
            description: true
        }
    })
    if(response){
        console.log(response);
    }else{
        console.log("Problem in getting todos...");
    }
}

todoandUser(1);