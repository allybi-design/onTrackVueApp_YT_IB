<template>
  <li class="relative flex flex-col gap-2 border-slate-800 bg-slate-300 py-3 px-4">
    <div class="flex items-center gap-2">
      <TimeLineHour :hour="timeLineItem.hour" />

      <BaseSelect :selected="timeLineItem.selected" :options="activitiesOptions"
        @isSelected="updateTimelineItems(timeLineItem, { selected: $event })" />
    </div>
  </li>
</template>

<script setup>
import { useActivitesStore } from '@/stores/activitesStore'
import { useTimeLineStore } from '@/stores/timeLineStore';

import TimeLineHour from '@/components/TimeLineHour.vue';
import BaseSelect from '@/components/BaseSelect.vue';

const { updateTimelineItems } = useTimeLineStore()
const { activitiesOptions } = useActivitesStore()

const { timeLineItem } = defineProps({
  timeLineItem: {
    type: Object,
    required: true,
  }
});

</script>
