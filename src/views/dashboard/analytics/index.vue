<script setup lang="ts">
import { toggleDark } from '@/logics'
import { Button } from "@/components/ui/button"

</script>

<template>
  <div class="analytics">
    <Button type="primary" @click="toggleDark">
      toggle dark mode
    </Button>
  </div>
</template>

<style scoped lang="less"></style>
