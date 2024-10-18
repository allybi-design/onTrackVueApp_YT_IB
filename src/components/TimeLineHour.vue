<template>
  <span :class="classes">
    {{ formatedHour(hour) }}
  </span>
</template>

<script setup>
import { now, formatedHour } from '@/utils/time';

const { hour } = defineProps({
  hour: {
    type: Number,
    required: true,
  }
});

const classes = [
  'absolute rounded px-2 -top-4 left-1/2 -translate-x-1/2 font-mono text-xl text-white',
  now.value.getHours() === hour ? 'bg-purple-900' : 'bg-slate-500'
];

</script>

<style lang="scss" scoped></style>