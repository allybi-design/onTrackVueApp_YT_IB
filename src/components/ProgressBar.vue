<template>
  <div class=" bg-slate-100 h-8 rounded-full w-64 border-black border-2 p-1">
    <div class="h-full rounded-full bg-red-500" :style="`width: ${progress}%;`"></div>
  </div>
</template>

<script setup>

const { progress } = defineProps({
  progress: Number,
});
</script>


