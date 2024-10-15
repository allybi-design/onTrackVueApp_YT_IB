<template>
  <li class="relative flex  gap-2 border-t border-x border-slate-800 bg-slate-300 py-3 px-4">
    <span class="absolute rounded px-2 -top-4 left-1/2 -translate-x-1/2 font-mono text-xl text-white"
      :class="currentHourHighLight">
      {{ formatedHour }}
    </span>

    <BaseSelection :selectedActivityId="timeLineItem.selectedActivityId"
      @isSelected="updateTimelineItem(timeLineItem, { selectedActivityId: $event })" />

  </li>
</template>

<script setup>
// import { ref } from 'vue';
import BaseSelection from '@/components/BaseSelection.vue';
import { updateTimelineItem } from '@/utils/timeline-items';

const { timeLineItem } = defineProps({
  timeLineItem: {
    type: Object,
    required: true,
  }
});

const currentHourHighLight = new Date().getHours() === timeLineItem.hour ? 'bg-purple-900' : 'bg-slate-500';

const formatedHour = `${timeLineItem.hour.toString().padStart(2, 0)}:00`;

</script>
