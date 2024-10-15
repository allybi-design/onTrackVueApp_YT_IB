<template>
  <BaseButton :isDisabled>
    <Icon icon="mdi:close-box" height="1.1em" class="text-4xl " />
  </BaseButton>

  <div class="flex gap-4 w-full">
    <select name="eventSelection" class="w-full truncate rounded bg-slate-100 p-1 text-2xl selected:bg-slate-300"
      @change="isSelected($event.target.value)">

      <option v-for="{ value, label } in options" :key="value" :value :selected="value === selectedActivityId">
        {{ label }}
      </option>

    </select>
  </div>
</template>

<script setup>
import { ref, } from 'vue';
import { Icon } from '@iconify/vue';

import { isSelectValueValid } from '@/utils/validators';
import { normalizeSelectValue } from '@/utils/functions';

import BaseButton from '@/components/BaseButton.vue';

const { selectedActivityId } = defineProps({
  selectedActivityId: {
    type: Number,
    required: true,
  }
});

const emit = defineEmits({
  isSelected: isSelectValueValid
});

function isSelected(value) {
  // console.log(typeof value, value);
  // console.log(normalizeSelectValue(value));
  emit('isSelected', normalizeSelectValue(value))
}

const isDisabled = ref(false);

const options = ref([
  { value: 0, label: "Rest", },
  { value: 1, label: "Work", },
  { value: 2, label: "Eat", },
  { value: 3, label: "Sleep", },
  { value: 4, label: "Play", },
  { value: 5, label: "Study", }
])

</script>
