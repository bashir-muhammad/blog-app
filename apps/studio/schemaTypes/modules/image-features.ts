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

export const imageFeaturesType = defineType({
  name: 'imageFeatures',
  title: 'Image Features',
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
      name: 'title',
      title: 'Title',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
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
    defineField({
      name: 'images',
      title: 'Images',
      type: 'array',
      of: [
        defineArrayMember({
          type: 'image',
          options: {hotspot: true},
        }),
      ],
      validation: (rule) => rule.required().min(1).max(2),
      description: 'Add 1 image for single layout or 2 images for stacked layout.',
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      count: 'features',
    },
    prepare({title, media, count}: {title?: string; media?: any; count?: unknown[]}) {
      return {
        title: title || 'Image Features',
        subtitle: `Image Features: ${count?.length || 0} feature items`,
        media,
      }
    },
  },
})
