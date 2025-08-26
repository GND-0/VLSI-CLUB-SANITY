// ./schemas/members.ts
import { defineType } from 'sanity'

const clubPositions = [ "President", "Secretary", "Treasurer", "Member" ]

export const members = defineType({
  name: 'members',
  title: 'Members',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Member',
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
      title: 'LinkedIn url of the Member',
      type: 'string',
    },
    {
      name: 'order',
      title: 'Order of Appearance in the website',
      type: 'number',
    },
    {
      name: 'image',
      title: 'Image of the Member',
      type: 'image',
    },
  ],
})
