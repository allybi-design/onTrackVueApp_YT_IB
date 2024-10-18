<template>
  <li class="flex flex-col gap-2 border-slate-800 bg-slate-300 py-3 px-4">
    <div class="flex  items-center gap-2">
      <BaseButton>
        <Icon icon="mdi:trash-can-outline" height="1.1em" class="text-4xl " />
      </BaseButton>
      <span class="truncate text-2xl">{{ label }}</span>
    </div>

    <div class="flex items-center gap-2">
      <BaseSelect :options="timeOptions" :selected="secondsToComplete"
        @isSelected="secondsToComplete = $event" />
    </div>
  </li>

</template>

<script setup>
import { ref } from 'vue';

import BaseButton from '@/components/BaseButton.vue';
import BaseSelect from '@/components/BaseSelect.vue';

import { timeOptions } from '@/utils/constants';

import { Icon } from '@iconify/vue';

const { label } = defineProps({
  'label': {
    type: String,
    required: true
  }
});

const secondsToComplete = ref(0);

</script>
