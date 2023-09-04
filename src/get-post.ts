import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({ log: ['query', 'info'] });
const prisma = new PrismaClient();

async function main () {
    const post = await prisma.post.findMany({
        where: {
            author: {
                email: 'hello@email.com'
            },
        },
        include: {
            author: {
                select: {
                    email: true,
                    name: true
                },

            }
        }
    });
    console.log(post);
}

main()
    .then(async () => {
        console.log('Got you Data');
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })