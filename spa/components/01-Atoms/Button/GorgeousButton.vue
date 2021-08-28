<template>
  <button
    class="px-2 py-1 font-bold cursor-pointer bg-gradient-to-b from-primary-300 via-primary-500 to-primary-300 text-white border rounded-xl shadow focus:outline-none transform hover:scale-105 duration-200"
    @click="clickEvent"
  >
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
