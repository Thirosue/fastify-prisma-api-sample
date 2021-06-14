import fastify from 'fastify'
import userRoute from './routes/user/user.route'
import reservationRoute from './routes/resavation/reservation.route'
import resavationRecordRoute from './routes/resavationRecord/resavationRecord.route'
import { find } from './job/user.job'

const server = fastify()
server.register(require('fastify-cors'))
userRoute(server)
reservationRoute(server)
resavationRecordRoute(server)

server.listen(8080, (err, address) => {
    if (err) {
        console.error(err)
        process.exit(1)
    }
    console.log(`Server listening at ${address}`)

    // jobs settings 
    setInterval(find, 3000)
})
