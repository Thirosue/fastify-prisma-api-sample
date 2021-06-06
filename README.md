# fastify-prisma-api-sample

## Migration

```
npx prisma migrate dev --name init
```

```
npx prisma db seed --preview-feature
```

## Project Setup

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
DATABASE_URL="postgresql://postgres:postgres@localhost:5432/mydb?schema=postgres"
```