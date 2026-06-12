export default defineEventHandler(async event => {
  return await db.query.usersTable.findMany()
})
