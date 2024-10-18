<template>
  <article>
    <h1 class="text-3xl uppercase text-center mb-8">Activities</h1>
    <ul class="flex flex-col border border-black divide-y divide-black">
      <ActivityItem v-for="activity in activitiesOptions" :key="activity.value" :label="activity.label" />
    </ul>
  </article>
</template>

<script setup>
import { storeToRefs } from 'pinia';

import ActivityItem from '@/components/ActivityItem.vue';

import { useActivitesStore } from '@/stores/activitesStore'

const { activitiesOptions } = storeToRefs(useActivitesStore())

// import { isActivityValid } from '@/utils/validators';
// import { activitiesOptions } from '@/utils/constants';
</script>
