import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

interface UpdateParams {
    firstname: string,
    lastname: string,
    phonenumber: string
}

async function updateUser(email: string, {
    firstname,
    lastname,
    phonenumber
}: UpdateParams) {
    const response = await prisma.user.update({
        where: {email: email},
        data: {
            firstname,
            lastname,
            phonenumber
        }
    })
    if(response){
        console.log("Update sucessful...", response);
    }else{
        console.log(" Error exist in update function....");
    }
}

const user = {
    firstname: "Sanjay",
    lastname: "Singhaniya",
    phonenumber: "+9779842427748"
}
updateUser("12@12", user);