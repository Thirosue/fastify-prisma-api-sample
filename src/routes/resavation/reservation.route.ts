import { FastifyInstance } from 'fastify'
import { IParam } from './reservation.type'
import { find } from './reservation.service'
import { toJson } from '../../helper/jsonHelper'

export default (app: FastifyInstance) => {
    app.get<{ Params: IParam }>(
        '/api/resavation/:at',
        async (request, reply) => {
            const at = Number(request.params.at)
            const resavation = await find(at)
            reply.header('Content-Type', 'application/json').code(200)
            reply.send(toJson(resavation))
        }
    )
}
