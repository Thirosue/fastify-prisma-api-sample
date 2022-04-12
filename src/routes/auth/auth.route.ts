import { FastifyInstance } from 'fastify'
import { Auth, Token } from './auth.type'

const response = {
    "data": [
        {
            "id": "demo",
            "first_name": "john",
            "last_name": "doe",
            "email": "sample@exsample.com",
            "tel": "09012345678",
            "roles": [
                "system_admin"
            ],
            "permission_key_list": [
                ".*"
            ],
            "idToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            "refreshToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c",
            "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c"
        }
    ],
    "message": "正常終了"
}

export default (app: FastifyInstance) => {
    app.post<{ Body: Auth }>(
        '/api/auth',
        async (request, reply) => {
            console.log(request.body)
            reply.header('Content-Type', 'application/json').code(200)
            reply
                .cookie('session', 'dummy')
                .send(response)
        }
    )

    app.post<{ Body: Token }>('/api/auth/check', async (request, reply) => {
        console.log(request.body)
        reply.header('Content-Type', 'application/json').code(200)
        reply
            .cookie('session', 'dummy')
            .send(response)
    })
}
