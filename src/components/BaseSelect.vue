<template>
  <BaseButton type="neutral" :isDisabled @click="isSelected(0)">
    <Icon icon="material-symbols:close" height="1.1em" class="text-3xl p-0" />
  </BaseButton>

  <div class="flex gap-4 w-full font-mono">
    <select name="eventSelection" class="w-full truncate rounded  bg-slate-100 p-1 text-2xl selected:bg-slate-300"
      @change="isSelected($event.target.value)">

      <option class=" border-1 border-black" v-for="{ value, label } in options" :key="value" :value
        :selected="value === selected">
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

const isDisabled = ref(false);

const { selected, options } = defineProps({
  selected: {
    type: Number,
    required: true,
  },
  options: {
    type: Array,
    required: true,
  }
});

const emit = defineEmits({
  isSelected: isSelectValueValid
});

function isSelected(value) {
  emit('isSelected', normalizeSelectValue(value))
}


</script>
