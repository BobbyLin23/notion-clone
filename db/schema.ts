import { type AnyPgColumn, boolean, index, integer, pgTable, serial, text } from 'drizzle-orm/pg-core'

export const documents = pgTable('documents', {
  id: serial('id').primaryKey(),
  title: text('title').notNull(),
  userId: text('user_id').notNull(),
  isArchived: boolean('is_archived'),
  content: text('content'),
  coverImage: text('cover_image'),
  icon: text('icon'),
  isPublished: boolean('is_published'),
  parentDocument: integer('parent_document').references((): AnyPgColumn => documents.id),
}, (table) => {
  return {
    userIdx: index('user_idx').on(table.userId),
    userParentIdx: index('user_parent_idx').on(table.userId, table.isArchived),
  }
})
