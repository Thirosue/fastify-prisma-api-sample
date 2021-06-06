import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

export async function find(at: number) {
    const resavation = await prisma.resavation.findUnique({
        where: {
            at
        },
        select: {
            at: true,
            stock: true
        }
    })
    return resavation
}
