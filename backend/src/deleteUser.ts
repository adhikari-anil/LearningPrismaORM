import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function deleteUser(email: string) {
    const response = await prisma.user.delete({
        where: {email: email}
    })
    if(response){
        console.log(" User Deleted..", response);
    }else{
        console.log("Problem in deletion...");
    }
}

deleteUser("12@12");