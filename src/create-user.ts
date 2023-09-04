import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main () {
    await prisma.user.create({
        data: {
            email: "hello@email.com",
            name: "Kirat"
        }
    });
}

main()
    .then(async () => {
        console.log('Data Added');
        await prisma.$disconnect();
    })
    .catch(async (err) => {
            console.log(err);
            await prisma.$disconnect();
            process.exit(1);
    });