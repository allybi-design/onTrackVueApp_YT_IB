<template>
  <li class="relative flex  gap-2 border-t border-x border-slate-800 bg-slate-300 py-3 px-4">
    <TimeLineHour :hour="timeLineItem.hour" />

    <BaseSelect :selectedId="timeLineItem.selectedId" :options
      @isSelected="updateTimelineItem(timeLineItem, { selectedId: $event })" />

  </li>
</template>

<script setup>
import { ref } from 'vue';

import TimeLineHour from '@/components/TimeLineHour.vue';
import BaseSelect from '@/components/BaseSelect.vue';

import { updateTimelineItem } from '@/utils/timeline-items';
import { activitiesOptions } from '@/utils/constants';

const { timeLineItem } = defineProps({
  timeLineItem: {
    type: Object,
    required: true,
  }
});

const options = ref(activitiesOptions)

</script>
