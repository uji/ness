<template>
  <label :for="id" class="mr-2 cursor-pointer">
    <input
      :id="id"
      :name="name"
      :value="value"
      type="checkbox"
      class="mr-1"
    />{{ text }}</label
  >
</template>

<script lang="ts">
import { defineComponent } from '@vue/composition-api'
export default defineComponent({
  props: {
    id: {
      type: String,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
    value: {
      type: String,
      required: true,
    },
    text: {
      type: String,
      default: '',
    },
  },
})
</script>
