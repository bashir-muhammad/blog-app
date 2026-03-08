import {defineArrayMember, defineField, defineType} from 'sanity'
import {sectionFields} from './partials/section-fields'

const iconOptions = [
  'Accessibility',
  'BarChart',
  'Globe',
  'Layers',
  'Lock',
  'Rocket',
  'ShieldCheck',
  'Star',
  'Zap',
]

export const featuresType = defineType({
  name: 'features',
  title: 'Features',
  type: 'object',
  fieldsets: [
    {
      name: 'sectionSettings',
      title: 'Section Settings',
      options: {collapsible: true, collapsed: true},
    },
  ],
  fields: [
    ...sectionFields,
    defineField({
      name: 'features',
      title: 'Features',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'object',
          name: 'feature',
          fields: [
            defineField({
              name: 'icon',
              title: 'Icon',
              type: 'string',
              options: {
                list: iconOptions.map((name) => ({title: name, value: name})),
              },
              initialValue: 'Star',
            }),
            defineField({
              name: 'title',
              title: 'Title',
              type: 'string',
              validation: (rule) => rule.required(),
            }),
            defineField({
              name: 'description',
              title: 'Description',
              type: 'text',
              validation: (rule) => rule.required(),
            }),
          ],
          preview: {
            select: {
              title: 'title',
              subtitle: 'icon',
            },
            prepare({title, subtitle}: {title?: string; subtitle?: string}) {
              return {
                title: title || 'Feature item',
                subtitle: subtitle ? `Icon: ${subtitle}` : 'No icon selected',
              }
            },
          },
        }),
      ],
      validation: (rule) => rule.required().min(1),
    }),
  ],
  preview: {
    select: {
      count: 'features',
    },
    prepare({count}: {count?: unknown[]}) {
      return {
        title: 'Features',
        subtitle: `Features: ${count?.length || 0} items`,
      }
    },
  },
})
