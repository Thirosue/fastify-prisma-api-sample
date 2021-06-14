import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function find() {
    const user = await prisma.user.findUnique({
        where: {
            id: 1
        },
        select: {
            id: true,
            name: true
        }
    })
    console.log(user)
    return user
}

