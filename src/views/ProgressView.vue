<template>
  <h1>Number of activities: {{ doubleActivities }}</h1>
</template>

<script setup>
import { computed } from 'vue'
import { useActivitesStore } from '../stores/activitesStore'
import { storeToRefs } from 'pinia';

const activitiesStore = storeToRefs(useActivitesStore())

const doubleActivities = computed(() => {
  return activitiesStore.getDouubleActivities.value
})
</script>
