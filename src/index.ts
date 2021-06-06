import fastify from 'fastify'
import userRoute from './routes/user/route'

const server = fastify()
userRoute(server)

server.listen(8080, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})