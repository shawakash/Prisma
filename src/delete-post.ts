import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({ log: ['query', 'info'] });
const prisma = new PrismaClient();

async function main () {
    await prisma.post.deleteMany({
        where: {
            published: false,
            authorId: 2
        }
    });
}

main()
    .then(async () => {
        console.log('Delete you Data');
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })