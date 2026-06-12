import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL as string,
  },
  dialect: 'postgresql',
  out: './migrations',
  schema: './server/db/schema.ts',
})
