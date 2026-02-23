import {defineField, defineType} from 'sanity'
export const commentsType = defineType({
  name: 'comments',
  title: 'Comments',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
    }),
    defineField({
      name: 'comment',
      title: 'Comment',
      type: 'text',
      validation: (r) => r.required(),
    }),
    defineField({
      name: 'post',
      title: 'Post',
      type: 'reference',
      to: [{type: 'post'}],
      description: 'The post this comment belongs to.',
    }),
    defineField({
      name: 'approved',
      title: 'Approved',
      type: 'boolean',
      description: 'Comments must be approved before they are visible to the public.',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      name: 'name',
      comment: 'comment',
      approved: 'approved',
    },
    prepare(selection) {
      const {name, comment, approved} = selection
      const snippet = comment?.substring(0, 50) + (comment?.length > 50 ? '...' : '')
      return {
        title: `${name}${approved ? ' ✓' : ' (pending)'}`,
        subtitle: snippet,
      }
    },
  },
})
