import { PrismaClient } from '@prisma/client'
import { User, IQuery } from './type'

const prisma = new PrismaClient()

export async function create(user: User) {
    await prisma.user.create({
        data: user
    })
}

export async function update(id: number, user: User) {
    await prisma.user.update({
        data: user,
        where: {
            id
        }
    })
}

export async function remove(id: number) {
    await prisma.user.delete({
        where: {
            id
        },
    })
}

export async function find(id: number) {
    const user = await prisma.user.findUnique({
        where: {
            id
        },
        select: {
            id: true,
            name: true
        }
    })
    return user;
}

export async function findAll(query: IQuery) {
    const count = await prisma.user.count();
    let orderBy = {}
    if(query.orderBy) {
        orderBy = {
            [query.orderBy]: query.order
        }
    }
    const users = await prisma.user.findMany({
        where: {
            name: {
                contains: query.name
            }
        },
        skip: query.rows * query.page,
        take: Number(query.rows),
        orderBy,
        select: {
            id: true,
            name: true
        }
    })

    return {
        count,
        data: users
    };
}

