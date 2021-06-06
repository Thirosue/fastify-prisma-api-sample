import { FastifyInstance } from 'fastify'
import { User, IParam, IQuery } from './type'
import { findAll, find, create, update, remove } from './service'

export default (app: FastifyInstance) => {
  app.post<{ Params: IParam, Body: User }>('/api/user/:id', async (request, reply) => {
    const user = await create(request.body);
    reply.header('Content-Type', 'application/json').code(201)
    reply.send({})
  });
  
  app.get<{ Querystring: IQuery }>('/api/user', async (request, reply) => {
    const results = await findAll(request.query);
    reply.header('Content-Type', 'application/json').code(200)
    reply.send(results)
  })
   
  app.get<{ Params: IParam }>('/api/user/:id', async (request, reply) => {
    const id = Number(request.params.id)
    const user = await find(id)
    reply.header('Content-Type', 'application/json').code(200)
    reply.send(user)
  })
  
  app.put<{ Params: IParam, Body: User }>('/api/user/:id', async (request, reply) => {
    const id = Number(request.params.id)
    const user = await find(id)
    if(!user) {
      reply.header('Content-Type', 'application/json').code(404)
      reply.send({})      
    }

    await update(id, request.body);
    reply.header('Content-Type', 'application/json').code(200)
    reply.send({})
  });
  
  app.delete<{ Params: IParam }>('/api/user/:id', async (request, reply) => {
    const id = Number(request.params.id)
    const user = await find(id)
    if(!user) {
      reply.header('Content-Type', 'application/json').code(404)
      reply.send({})      
    }

    await remove(id);
    reply.header('Content-Type', 'application/json').code(200)
    reply.send({})
  });
};

