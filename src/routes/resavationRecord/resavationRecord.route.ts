import { FastifyInstance } from 'fastify'
import { ResavationRecord } from './resavationRecord.type'
import { reserve } from './resavationRecord.service'

export default (app: FastifyInstance) => {
  app.put<{ Body: ResavationRecord }>('/api/resavationRecord', async (request, reply) => {
    try {
      const at = Number(request.body.at)
      const uid = Number(request.body.uid)
      await reserve(at, uid)
      reply.header('Content-Type', 'application/json').code(201)
      reply.send({})
    } catch(e) {
      console.error(e)
      reply.header('Content-Type', 'application/json').code(404)
      reply.send({})
    }
  });
};

