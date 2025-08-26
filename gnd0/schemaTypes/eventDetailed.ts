import { defineType } from 'sanity';

export const eventDetailed = defineType({
  name: 'eventDetailed',
  title: 'Detailed Event',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'shortDescription',
      title: 'Short Description',
      type: 'text',
      validation: (Rule) => Rule.required().max(200),
    },
    {
      name: 'longDescription',
      title: 'Long Description',
      type: 'array',
      of: [{ type: 'block' }],
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'dateTime',
      title: 'Date and Time',
      type: 'datetime',
      validation: (Rule) => Rule.required(),
    },
    {
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [{ type: 'image', options: { hotspot: true } }],
    },
    {
      name: 'videos',
      title: 'Videos',
      type: 'array',
      of: [{ type: 'file', fields: [{ name: 'caption', type: 'string', title: 'Caption' }] }],
      validation: (Rule) => Rule.optional(), // Make videos optional
    },
    {
      name: 'location',
      title: 'Location',
      type: 'string',
    },
    {
      name: 'speakers',
      title: 'Speakers',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'tags',
      title: 'Tags',
      type: 'array',
      of: [{ type: 'string' }],
      options: { layout: 'tags' },
    },
    {
      name: 'attendeesCount',
      title: 'Attendees Count',
      type: 'number',
    },
    {
      name: 'registrationLink',
      title: 'Registration Link',
      type: 'url',
    },
  ],
});