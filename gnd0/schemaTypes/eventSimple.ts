// schemaTypes/eventSimple.ts
import { defineType } from 'sanity';

export const eventSimple = defineType({
  name: 'eventSimple',
  title: 'Simple Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200), // Short one-line description
    },
    {
      name: 'dateTime',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
  ],
});