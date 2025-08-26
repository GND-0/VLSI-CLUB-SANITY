// ./schemas/hardwareComponent.ts
import { defineType } from 'sanity'

export const hardwareComponent = defineType({
  name: 'hardwareComponent',
  title: 'Hardware Component',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
    },
    {
      name: 'count',
      title: 'Count',
      type: 'number',
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'string',
    },
    {
      name: 'fullDescription',
      title: 'Full Description',
      type: 'text',
    },
    {
      name: 'links',
      title: 'Links',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            { name: 'url', title: 'URL', type: 'url' },
          ],
        },
      ],
    },
  ],
})
