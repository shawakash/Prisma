import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient({ log: ['query', 'info'] });
const prisma = new PrismaClient();

async function main () {
    await prisma.user.update({
        where: {
            id: 1
        },
        data: {
            email: 'hola@email.com',
            name: 'pyush'
        }
    });
}

main()
    .then(async () => {
        console.log('Updated you Data');
        await prisma.$disconnect();
    }).catch(async (e) => {
        console.log(e);
        await prisma.$disconnect();
        process.exit(1);
    })