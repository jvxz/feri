import { drizzle } from 'drizzle-orm/node-postgres'

import * as schema from './schema'

export const db = drizzle(useRuntimeConfig().DATABASE_URL, { schema })
