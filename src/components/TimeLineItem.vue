<template>
  <li class="relative flex flex-col gap-2 border-t border-x border-slate-200 py-10 px-4">
    <span class="absolute rounded bg-gray-100 px-2 -top-4 left-1/2 -translate-x-1/2 font-mono text-xl text-slate-600">
      {{ timeLineItem.hour }}:00
    </span>
  </li>
</template>

<script setup>
const { timeLineItem } = defineProps({
  timeLineItem: String
});
</script>
