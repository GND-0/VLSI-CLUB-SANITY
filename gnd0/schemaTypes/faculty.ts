// ./schemas/faculty.ts
import { defineType } from 'sanity'

const facultyPositions = [ "Faculty Mentor", "Faculty Guide" ]

export const faculty = defineType({
  name: 'faculty',
  title: 'Faculty',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Name of the Faculty',
      type: 'string',
    },
    {
      name: 'position',
      title: 'Position related to Club',
      type: 'string',
      options: {
        list: facultyPositions.map(name => ({ title: name, value: name })),
      },
    },
    {
      name: 'institute_position',
      title: 'Position related to Institute',
      type: 'string',
    },
    {
      name: 'linkedin',
      title: 'LinkedIn url of the Faculty',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Image of the Faculty',
      type: 'image',
    },
  ],
})
