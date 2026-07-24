import { drizzle } from 'drizzle-orm/node-postgres'

import { relations } from './relations'

export const db = drizzle(useRuntimeConfig().DATABASE_URL, { relations })
