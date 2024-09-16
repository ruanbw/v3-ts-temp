<script setup lang="ts">
import { Button } from 'ant-design-vue'
import { toggleDark } from '@/logics'
</script>

<template>
  <div class="analytics">
    <Button type="primary" @click="toggleDark">
      toggle dark mode
    </Button>
  </div>
</template>

<style scoped></style>
