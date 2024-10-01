<template>
  <BaseButton :isDisabled>
    <Icon icon="mdi:close-box" height="1.1em" class="text-4xl " />
  </BaseButton>

  <select class="w-full truncate rounded bg-slate-100 p-1 text-2xl">
    <option v-for="{ value, label } in options" :key="value" :value :selected="value === currentSelection">{{ label }}
    </option>
  </select>
</template>

<script setup>
import { ref } from 'vue';

import BaseButton from '@/components/BaseButton.vue';
import { Icon } from '@iconify/vue';

const isDisabled = ref(false);

const { options, currentSelection } = defineProps({
  options: Array,
  currentSelection: Number
});


</script>
