<template>
  <li class="relative flex flex-col gap-2 border-t border-x border-slate-800 bg-slate-300 py-6 px-4">
    <span class="absolute rounded px-2 -top-4 left-1/2 -translate-x-1/2 font-mono text-xl text-white"
      :class="currentHourHighLight">
      {{ timeLineItem.hour }}:00
    </span>

    <div class="flex flex-row gap-4">
      <BaseSelection :options :currentSelection />
    </div>

  </li>
</template>

<script setup>
import { ref } from 'vue';
import BaseSelection from '@/components/BaseSelection.vue';

const { timeLineItem } = defineProps({
  timeLineItem: Object
});

const currentHourHighLight = new Date().getHours() === timeLineItem.hour ? 'bg-purple-900' : 'bg-slate-500';

const options = ref([
  { value: '1', label: "Rest", },
  { value: '2', label: "Work", },
  { value: '3', label: "Eat", },
  { value: '4', label: "Sleep", },
  { value: '5', label: "Play", },
  { value: '6', label: "Study", }
])

const currentSelection = ref(2);

</script>
