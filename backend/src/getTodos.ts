import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

async function getTodos(user_id: number) {
    const response = await prisma.todos.findMany({
        where: {
            user_id
        }
    })
    if(response){
        console.log(response);
    }else{
        console.log("Problem in getting todos...");
    }
}

getTodos(1);