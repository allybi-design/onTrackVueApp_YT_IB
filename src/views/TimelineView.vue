<template>
  <article>
    <h1 class="text-3xl uppercase text-center mb-8">TimeLine</h1>
    <ul class="border-b">
      <TimeLineItem v-for="timeLineItem in timeLineItems" :key="timeLineItem.hour" :timeLineItem />
    </ul>
  </article>
</template>

<script setup>
import { ref } from 'vue';

import TimeLineItem from '@/components/TimeLineItem.vue';

const timeLineItems = ref(generateTimeLineItems())

function generateTimeLineItems() {
  const timeLineItems = []

  for (let hour = 0; hour < 24; hour++) {
    timeLineItems.push({ hour })
  }

  return timeLineItems
}
</script>
