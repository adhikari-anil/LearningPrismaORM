// In this there is a simple server that handle post request using typescript..

import express, { Request, Response } from 'express';
import { PrismaClient } from '@prisma/client';
import Cors from "cors";

const app = express();

app.use(Cors());

const prisma = new PrismaClient();

// Middleware to parse JSON
app.use(express.json());

interface CreateTodoRequest {
  firstname: string;
  lastname: string;
  email: string;
  password: string;
  phonenumber: string
}

app.post("/create", async (req: Request<{}, {}, CreateTodoRequest>, res: Response) => {
  try {
    const { firstname, lastname, email, password, phonenumber} = req.body;

    const response = await prisma.user.create({
      data: {
        firstname,
        lastname,
        email,
        password,
        phonenumber
      },
      select: {
        id: true,
        firstname: true,
        lastname: true
      }
    });

    console.log(response);
    res.status(201).json(response);
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Internal server error' });
  }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port http://localhost:${PORT}`);
});
