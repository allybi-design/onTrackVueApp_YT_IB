<template>
  <article>
    <h1 class="text-3xl uppercase text-center mb-8">TimeLine</h1>
    <ul class="flex flex-col border border-black divide-y">
      <TimeLineItem v-for="timeLineItem in timeLineItems" :key="timeLineItem.hour" :timeLineItem />
    </ul>
  </article>
</template>

<script setup>
import { useTimeLineStore } from '@/stores/timeLineStore'

import TimeLineItem from '@/components/TimeLineItem.vue';

const { timeLineItems } = useTimeLineStore()
</script>
