import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const MESSAGE_BOOKED = 'That reservation is already booked! Please try again.'

export async function reserve(at: number, userId: number) {
    console.log(`booking... at: ${new Date(at)}`)

    // UPDATE "ResavationRecord" SET userId = 1, available = false WHERE ID = (select ID from "ResavationRecord" where available = true limit 1);
    // record locked
    const available = await prisma.resavationRecord.findFirst({
        where: {
            at,
            available: true
        }
    })
    if (!available) {
        throw new Error(MESSAGE_BOOKED)
    }

    const reserved = await prisma.resavationRecord.updateMany({
        data: {
            userId,
            at,
            available: false,
            version: {
                increment: 1
            }
        },
        where: {
            id: available.id,
            version: available.version
        }
    })
    if (reserved.count === 0) {
        throw new Error(MESSAGE_BOOKED)
    }
}
