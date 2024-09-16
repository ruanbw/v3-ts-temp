<script setup lang="ts">
import { Icon } from '@iconify/vue'

defineOptions({
  name: 'Icon',
})

const { icon = '' } = defineProps<{
  icon: string
}>()
</script>

<template>
  <Icon :icon />
</template>

<style scoped>

</style>
