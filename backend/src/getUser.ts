import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function getUser(email: string) {
    const response = await prisma.user.findFirst({
        where: {email: email}
    })
    if(response){
        console.log(" List of Users: ", response);
    }else{
        console.log("Problem in getting list...");
    }
}

getUser("12@12");