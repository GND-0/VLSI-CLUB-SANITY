import { defineType } from 'sanity';

export const article = defineType({
  name: 'article',
  title: 'Article',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'summary',
      title: 'Summary',
      type: 'array',
      of: [{ type: 'block' }], // Portable text for rich formatting (superscript/subscript)
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'VLSI', value: 'VLSI' },
          { title: 'Chip Design', value: 'Chip Design' },
          { title: 'Semiconductor Industry', value: 'Semiconductor Industry' },
          { title: 'Embedded Systems', value: 'Embedded Systems' },
          { title: 'Other ECE', value: 'Other ECE' },
        ],
      },
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'sourceUrls',
      title: 'Source URLs',
      type: 'array',
      of: [{ type: 'url' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'imagery',
      title: 'Imagery',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'image', title: 'Image', type: 'image' },
            { name: 'description', title: 'Description', type: 'string' },
          ],
        },
      ],
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'isVerified',
      title: 'Is Verified',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'upvotes',
      title: 'Upvotes',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'views',
      title: 'Views',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'author',
      title: 'Author',
      type: 'string',
    },
  ],
});