import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";
import { hash } from "bcrypt";

export async function POST(req: Request) {
    try {
        console.log("Request received");
        const body = await req.json();
        console.log("Request body:", body);

        const { email, name, password } = body;

        console.log("Checking if user exists");
        const existingUserByEmail = await prisma.user.findUnique({
            where: { email }
        });

        if (existingUserByEmail) {
            console.log("User already exists");
            return NextResponse.json(
                { user: null, message: "User with this email already exists" },
                { status: 409 }
            );
        }

        console.log("Hashing password");
        const hashedPassword = await hash(password, 10);

        console.log("Creating new user");
        const newUser = await prisma.user.create({
            data: {
                name,
                email,
                password: hashedPassword
            }
        });

        console.log("User created successfully");
        return NextResponse.json({ user: newUser, message: "User created" }, { status: 201 });
    } catch (error) {
        console.error("Error occurred:", error);
        return NextResponse.json({ user: null, message: "Something went wrong", error }, { status: 500 });
    }
}
