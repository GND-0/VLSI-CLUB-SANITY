import { defineType } from 'sanity'

const topics = ["VLSI", "Chip Design", "Semiconductors", "AI in Hardware", "Industry News", "Embedded Systems", "FPGA", "ASIC", "Low Power Design", "Verification", "Testing", "EDA Tools"]

export const hotTopics = defineType({
  name: 'hotTopics',
  title: 'Hot Topics / Latest Updates',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
    },
    {
      name: 'author',
      title: 'Author of the Article',
      type: 'string',
    },
    {
      name: 'summary',
      title: 'AI-Summarized Content',
      type: 'text',
    },
    {
      name: 'category',
      title: 'Category (e.g., VLSI, Chip Design)',
      type: 'string',
      options: {
        list: topics.map(name => ({ title: name, value: name })),
      },
    },
    {
      name: 'sourceUrl',
      title: 'Original Source URLs',
      type: 'array',
      of: [{ type: 'url' }],
    },
    {
      name: 'imagery',
      title: 'Imagery (Screenshots, Diagrams)',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            {
              name: 'image',
              title: 'Image',
              type: 'image',
              options: { hotspot: true }
            },
            {
              name: 'description',
              title: 'Description',
              type: 'string'
            }
          ],
          preview: {
            select: {
              media: 'image',
              title: 'description'
            }
          }
        }
      ]
    },
    {
      name: 'publishDate',
      title: 'Publish Date',
      type: 'date',
    },
    {
      name: 'isVerified',
      title: 'Human-Verified (for moderation)',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'views',
      title: 'View Count',
      type: 'number',
      initialValue: 0,
    },
    {
      name: 'upvotes',
      title: 'Upvote Count',
      type: 'number',
      initialValue: 0,
    },
  ],
})