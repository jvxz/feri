import { integer, pgEnum, pgTable, timestamp, unique, varchar } from 'drizzle-orm/pg-core'

export const oauthProviderEnum = pgEnum('oauth_provider', ['discord', 'github', 'google'])

export const usersTable = pgTable('users', {
  avatarUrl: varchar(),
  createdAt: timestamp().notNull().defaultNow(),
  displayName: varchar().notNull(),
  email: varchar().unique(),
  id: integer().primaryKey().generatedAlwaysAsIdentity(),
  username: varchar().notNull().unique(),
})

export const accountsTable = pgTable(
  'accounts',
  {
    createdAt: timestamp().notNull().defaultNow(),
    id: integer().primaryKey().generatedAlwaysAsIdentity(),
    provider: oauthProviderEnum().notNull(),
    providerAccountId: varchar().notNull(),
    userId: integer()
      .notNull()
      .references(() => usersTable.id, { onDelete: 'cascade' }),
  },
  table => [unique().on(table.provider, table.providerAccountId)],
)
