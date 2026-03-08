import {defineArrayMember, defineField, defineType} from 'sanity'
import {sectionFields} from './partials/section-fields'

export const heroTeaserType = defineType({
  name: 'heroTeaser',
  title: 'Hero Teaser',
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
      name: 'description',
      title: 'Description',
      type: 'text',
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
    defineField({
      name: 'link',
      title: 'Link',
      type: 'link',
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: {
      title: 'title',
      media: 'images.0',
      subtitle: 'link.label',
    },
    prepare({title, subtitle, media}: {title?: string; subtitle?: string; media?: any}) {
      return {
        title: title || 'Hero Teaser',
        subtitle: subtitle ? `Hero Teaser: ${subtitle}` : 'No link label',
        media,
      }
    },
  },
})
