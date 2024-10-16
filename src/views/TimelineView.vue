<template>
  <article>
    <h1 class="text-3xl uppercase text-center mb-8">TimeLine</h1>
    <ul class="border-b border-black">
      <TimeLineItem v-for="timeLineItem in timeLineItems" :key="timeLineItem.hour" :timeLineItem />
    </ul>
  </article>
</template>

<script setup>
import TimeLineItem from '@/components/TimeLineItem.vue';

import { timeLineItems } from '@/utils/timeline-items';

</script>
