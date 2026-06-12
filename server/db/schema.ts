import { integer, pgTable, varchar } from 'drizzle-orm/pg-core'

export const usersTable = pgTable('users', {
  age: integer().notNull(),
  email: varchar().notNull().unique(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  name: varchar().notNull(),
})
