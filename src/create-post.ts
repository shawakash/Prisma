import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.post.create({
        data: {
            title: "Demo Title",
            content: "Fuck off",
            author: {
                connect: {
                    email: 'hello@email.com'
                }
            }
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