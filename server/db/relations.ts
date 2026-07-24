import { defineRelations } from 'drizzle-orm'

import { accountsTable, usersTable } from './schema'

export const relations = defineRelations({ accountsTable, usersTable }, r => ({
  accountsTable: {
    user: r.one.usersTable({
      from: r.accountsTable.userId,
      to: r.usersTable.id,
    }),
  },
  usersTable: {
    accounts: r.many.accountsTable(),
  },
}))
