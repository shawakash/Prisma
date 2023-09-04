import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main () { 
    const user = await prisma.user.findFirst({
        select: {
            email: true,
            name: true
        },
        where: {
            name: "Kirat"
        }
    });
    console.log('User', user);
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