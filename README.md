### -- start setup project --

# helper setup project:

## settings:

- File -> Preferences -> Settings -> Search `files assoc -> '*.css': tailwindcss` and Search `quick sugg -> 'strings': on`.

## prettier:

- step 1: create file `prettier.config.js`:

  `module.exports = {
  plugins: ["prettier-plugin-tailwind"],
};`

- step 2: in file `.eslintrc.json`:

  `{
  "extends": ["next/core-web-vitals", "prettier"]
}`

## npm i:

- npm i prisma @prisma/client @vercel/blob react-draft-wysiwyg markdown-draft-js react-markdown nanoid date-fns @clerk/nextjs

- npm i --save-dev @types/markdown-draft-js @types/react-draft-wysiwyg prettier eslint-config-prettier prettier-plugin-tailwindcss

## npx with shadcn-ui:

- npx shadcn-ui@latest init

  - step 1: select option `Default`.

  - step 2: select option `Slate`.

  - step 3: select option `Yes`.

- npx shadcn-ui@latest add button

- npx shadcn-ui@latest add input

- npx shadcn-ui@latest add form

- npx prisma init

  - step 1: to `vercel` -> `storage` -> create db with `PostgreSQL` and select option `.env.local` and copy content -> after past to file `.env` in project.

  - step 2: select option `Prisma` -> copy content -> after past to file `schema.prisma` in project.

  - step 3: create `Object (ex: Job, ...)` model.

  - step 4: in terminal `npx prisma db push`.

  - step 5: in terminal `npx prisma generate`.

  - step 6: open browser -> past to search `https://www.prisma.io/docs/orm/more/help-and-troubleshooting/help-articles/nextjs-prisma-client-dev-practices` -> after copy content file `db.ts` and create file `prisma.ts` (/lib/prisma.ts) in project.

## create file scripts:

/placeholder-data.js
/seed.js

- When created complete files -> to file `package.json` -> in `scripts` add `"seed": "node scripts/seed.js"` -> after in terminal in project and run `npm run seed` -> continue run `npx prisma studio`.

## create blob on vercel:

- create blob -> after select option `.env.local` -> copy content -> past to file `.env` in project.

### -- done setup project --
#   j o b s - b o a r d  
 