<script lang="ts" setup>
const props = defineProps<{
  name: string
}>()
</script>

<template>
  <div>
    {{ props.name }}
  </div>
</template>

