<template>
  <button :class="classes" :disabled="isDisabled">
    <slot></slot>
  </button>
</template>

<script setup>

const { type, isDisabled } = defineProps({
  type: {
    type: String,
    required: true,
    default: 'neutral'
  },
  isDisabled: {
    type: Boolean,
    default: false
  }
})

const typeClasses = {
  'danger': 'bg-red-500 text-white enabled:hover:bg-red-600',
  'neutral': 'bg-slate-100 enabled:hover:bg-gray-200 enabled:hover:bg-red-600 enabled:hover:text-white'
}

const classes = [
  typeClasses[type],
  'rounded disabled:cursor-not-allowed disabled:opacity-50',
]
</script>
