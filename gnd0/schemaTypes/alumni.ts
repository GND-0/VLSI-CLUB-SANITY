// ./schemas/alumni.ts
import { defineType } from 'sanity'

const clubPositions = [ "Ex-President", "Ex-Secretary", "Ex-Treasurer", "Ex-Member" ]

export const alumni = defineType({
  name: 'alumni',
  title: 'Alumni',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Alumni',
      type: 'string',
    },
    {
      name: 'placed_at',
      title: 'Current Position/Occupation',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position related to Club',
      type: 'string',
      options: {
        list: clubPositions.map(name => ({ title: name, value: name })),
      },
    },
    {
      name: 'linkedin',
      title: 'LinkedIn url of the Alumni',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order of Appearance in the website',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the Alumni',
      type: 'image',
    },
  ],
})
