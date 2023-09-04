import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    await prisma.user.create({
        data: {
            email: 'hi@email.com',
            name: 'raman',
            posts: {
                create: {
                    title: 'Demo 2',
                    content: 'Fuck hard'
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