// This is a code for inserting data using prisma ORM...

import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function insertUser(email: string, firstname: string, lastname: string, password: string, phonenumber: string){
    const response = await prisma.user.create({
        data: {
            email,
            firstname,
            lastname,
            password,
            phonenumber
        },
        select: {
            id: true,
            firstname: true
        }
    })
    console.log(response);
}

insertUser("12@12","Anil", "Adhikari", "00000000a","+9779804329822");