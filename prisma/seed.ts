import moment from 'moment'
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

const users:any = []
for(let i = 0; i < 101; i++) {
    users.push({ name: `name${i + 1}`})
}

const at = moment('2021-06-01 10:00').toDate().getTime()
const records:any = []
for(let i = 0; i < 3; i++) {
    records.push({ 
        at
    })
}

async function main() {
    const created = await prisma.user.createMany({
        data: users
    })
    console.log(created);

    const resavation = await prisma.resavation.create({
        data: {
            at,
            stock: 3
        }
    })
    console.log(resavation);

    const results = await prisma.resavationRecord.createMany({
        data: records
    })
    console.log(results);

    const result = await prisma.resavation.findFirst();
    console.log(result);
    console.log(moment(Number(result?.at)));
}

main()
    .catch(e => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })