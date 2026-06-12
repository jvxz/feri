import { defineConfig } from 'drizzle-kit'

export default defineConfig({
  dbCredentials: {
    url: process.env.NUXT_DATABASE_URL!,
  },
  dialect: 'postgresql',
  out: './migrations',
  schema: './server/db/schema.ts',
})
