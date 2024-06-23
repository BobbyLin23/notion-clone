import { getAuth } from 'h3-clerk'

import { db } from '~/db'
import { documents } from '~/db/schema'

export default defineEventHandler(async (event) => {
  try {
    const body = await readBody(event)

    const { title, parentDocument } = body

    if (!title) {
      throw createError({
        statusCode: 400,
        statusMessage: 'Title is required',
      })
    }

    const { userId } = getAuth(event)

    if (!userId) {
      throw createError({
        statusCode: 401,
        statusMessage: 'Unauthorized',
      })
    }

    const [document] = await db.insert(documents).values({
      title,
      userId,
      parentDocument,
      isArchived: false,
      isPublished: false,
    }).returning()

    return document
  }
  catch (e) {
    throw createError({
      statusCode: 500,
      statusMessage: 'Internal Server Error',
    })
  }
})
