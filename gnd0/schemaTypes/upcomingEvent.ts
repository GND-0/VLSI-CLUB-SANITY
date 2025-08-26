// schemaTypes/upcomingEvent.ts
import { defineType } from 'sanity';

export const upcomingEvent = defineType({
  name: 'upcomingEvent',
  title: 'Upcoming Event',
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
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'tentativeDates',
      title: 'Tentative Dates and Schedules',
      type: 'array',
      of: [{ type: 'datetime' }],
    },
    {
      name: 'isLive',
      title: 'Is Live',
      type: 'boolean',
      initialValue: false,
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    },
    {
      name: 'venue',
      title: 'Venue',
      type: 'string',
    },
  ],
});