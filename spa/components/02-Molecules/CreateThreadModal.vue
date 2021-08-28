<template>
  <div>
    <Modal
      title="作成"
      close-button="Cancel"
      gorgeous-button="Create"
      @click="clickEvent($event)"
    >
      <template #contents>
        <label for="title" class="block mb-2 text-gray-700">タイトル</label>
        <input
          v-model="title"
          type="text"
          name="title"
          placeholder="title"
          class="w-full p-2 border rounded shadow-inner focus:outline-none focus:border-primary-400"
      /></template>
    </Modal>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from '@vue/composition-api'

export default defineComponent({
  setup(_, { emit }) {
    const title = ref('')
    const clickEvent = (flg: Boolean) => {
      if (flg) {
        emit('ok', title.value)
      } else {
        emit('hidden')
      }
    }
    return {
      clickEvent,
      title,
    }
  },
})
</script>
