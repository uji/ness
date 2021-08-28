import '@/assets/css/tailwind.css'

export default {
  title: 'Checkbox',
}

export const Normal = () => ({
  setup() {
    return {
      args: {
        id: 'checkbox',
        name: 'sample',
        value: '1',
        text: 'check',
      },
    }
  },
  template: '<Checkbox v-bind="args"  />',
})
