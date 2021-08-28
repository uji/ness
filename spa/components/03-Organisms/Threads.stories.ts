import '@/assets/css/tailwind.css'

export default {
  title: 'Threads',
}

export const Normal = () => ({
  setup() {
    return {
      threads: [
        { title: 'CTOを救いたい', id: '213214212' },
        {
          title:
            'あああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああああ',
          id: '213214213',
        },
        { title: 'title', id: '213214214' },
        { title: 'title', id: '213214215' },
        { title: 'title', id: '213214216' },
      ],
    }
  },
  template: '<Threads :threads="threads" />',
})
