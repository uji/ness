<template>
  <button :class="design" @click="clickEvent">
    {{ text }}
  </button>
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'

export default defineComponent({
  props: {
    text: {
      type: String,
      required: true,
    },
    design: {
      type: String,
      default: 'primary',
    },
  },
  setup(_, { emit }) {
    const clickEvent = () => {
      emit('click')
    }
    return {
      clickEvent,
    }
  },
})
</script>

<style scoped>
.primary {
  @apply px-7 py-2 font-bold rounded-full text-white ring-1 bg-secondary-400 ring-gray-300 transition hover:bg-secondary-500 focus:ring-secondary-600 focus:outline-none focus:ring-2 focus:ring-opacity-50;
}

.primary_s {
  @apply px-4 py-2 font-bold rounded-full text-white ring-1 bg-secondary-400 ring-gray-300 transition hover:bg-secondary-500 focus:ring-secondary-600 focus:outline-none focus:ring-2 focus:ring-opacity-50;
}

.secondary {
  @apply px-7 py-2 font-bold rounded-full text-gray-600 bg-gray-100 ring-gray-300 ring-1 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50;
}

.secondary_s {
  @apply px-4 py-2 font-bold rounded-full text-gray-600 bg-gray-100 ring-gray-300 ring-1 transition hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-yellow-300 focus:ring-opacity-50;
}
</style>
