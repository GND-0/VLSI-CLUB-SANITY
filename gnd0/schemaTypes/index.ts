import { type SchemaTypeDefinition } from 'sanity'
import { resource } from './resource'
import { hardwareComponent } from './hardwareComponent'
import { faculty } from './faculty'
import { members } from './members'
import { alumni } from './alumni'
import { eventSimple } from './eventSimple'
import { eventDetailed } from './eventDetailed'
import { upcomingEvent } from './upcomingEvent'
import { hotTopics } from './hotTopics'
import { article } from './article'

export const schemaTypes: SchemaTypeDefinition[] = [
  {
    name: 'testDoc',
    title: 'Test Document',
    type: 'document',
    fields: [
      { name: 'title', title: 'Title', type: 'string' },
    ],
  },
  resource,
  hardwareComponent,
  faculty,
  members,
  alumni,
  eventSimple,
  eventDetailed,
  upcomingEvent,
  hotTopics,
  article,
]
