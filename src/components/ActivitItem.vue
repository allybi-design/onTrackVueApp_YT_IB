<template>
  <div class="border border-black">
    <ul class="divide-y divide-black">
      <li v-for="activity in activities" :key="activity.value" class="flex flex-col gap-2 p-4">
        <div class="flex items-center gap-2">
          <BaseButton>
            <Icon icon="mdi:trash-can-outline" height="1.1em" class="text-4xl " />
          </BaseButton>
          <span class="truncate text-2xl">{{ activity.label }}</span>
        </div>

        <div class="flex items-center gap-2">
          <BaseSelection :selectedId="0" :options />
        </div>
      </li>
    </ul>
  </div>
</template>

<script setup>
import { ref } from 'vue';

import BaseButton from '@/components/BaseButton.vue';
import BaseSelection from '@/components/BaseSelect.vue';

import { periodOptions, activitiesOptions } from '@/utils/constants';

import { Icon } from '@iconify/vue';

const activities = ref(activitiesOptions);

const options = ref(periodOptions)
</script>
