<template>
  <button :disabled="isDisabled"
    class="bg-slate-100 text-slate-600 rounded enabled:hover:text-red-400 disabled:cursor-not-allowed disabled:opacity-25">
    <slot></slot>
  </button>
</template>

<script setup >

const { isDisabled } = defineProps({
  isDisabled: Boolean
});
</script>

