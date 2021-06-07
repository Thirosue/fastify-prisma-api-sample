# fastify-prisma-api-sample

## Migration

```
npx prisma migrate dev --name init
```

```
npx prisma db seed --preview-feature
```

## SetUp

```
yarn
```

```
yarn dev
```

## Api Call by httpie

### Get

* findById

```
 % http localhost:8080/api/user/1
HTTP/1.1 200 OK
Connection: keep-alive
Date: Sun, 06 Jun 2021 08:28:28 GMT
Keep-Alive: timeout=5
content-length: 23
content-type: application/json; charset=utf-8

{
    "id": 1,
    "name": "name1"
}
```

* findAll

```
% http 'localhost:8080/api/user?page=1&rows=5&orderBy=id&order=asc'
HTTP/1.1 200 OK
Connection: keep-alive
Date: Sun, 06 Jun 2021 08:30:07 GMT
Keep-Alive: timeout=5
content-length: 144
content-type: application/json; charset=utf-8

{
    "count": 101,
    "data": [
        {
            "id": 6,
            "name": "name6"
        },
        {
            "id": 7,
            "name": "name7"
        },
        {
            "id": 8,
            "name": "name8"
        },
        {
            "id": 9,
            "name": "name9"
        },
        {
            "id": 10,
            "name": "name10"
        }
    ]
}
```

### Post

```
% http POST localhost:8080/api/user/0 name=Alice
HTTP/1.1 201 Created
Connection: keep-alive
Date: Sun, 06 Jun 2021 08:30:56 GMT
Keep-Alive: timeout=5
content-length: 2
content-type: application/json; charset=utf-8

{}
```

### Put

```
% http PUT localhost:8080/api/user/1 name=John
HTTP/1.1 200 OK
Connection: keep-alive
Date: Sun, 06 Jun 2021 08:31:27 GMT
Keep-Alive: timeout=5
content-length: 2
content-type: application/json; charset=utf-8

{}
```

### Delete

```
% http DELETE localhost:8080/api/user/1
HTTP/1.1 200 OK
Connection: keep-alive
Date: Sun, 06 Jun 2021 08:31:58 GMT
Keep-Alive: timeout=5
content-length: 2
content-type: application/json; charset=utf-8

{}
```

## Info

### Project Setup

1. Create a new npm project, install Fastify, and install typescript & node.js types as peer dependencies:

```
yarn init -y
yarn add fastify
yarn add -D typescript @types/node ts-node-dev
```

2. Add the following lines to the "scripts" section of the package.json:

```
  "scripts": {
    "build": "tsc -p tsconfig.json",
    "dev": "ts-node-dev src/index.ts"
  },
```

3. Initialize a TypeScript configuration file:

```
npx tsc --init
```

4. install Prisma

```
yarn add prisma @prisma/client
```

5. SetUp Prisma

```
npx prisma init
```

6. Setting datasorce configuration file `.env`:

```
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb"
```

### Formater

Added the following to VS Code setting.json

```
    "[typescript]": {
        "editor.defaultFormatter": "vscode.typescript-language-features"
    },
```