<template>
  <header class="sticky top-0 z-20 mb-4">
    <nav class="flex justify-between items-center text-2xl p-4 bg-gray-200">
      
      <RouterLink to="/" class="logo flex items-center">
        <Icon icon="mdi-light:home" class="" />
        <h3 class="pl-4">OnTrackApp</h3>
      </RouterLink>

      <div v-if="progress >= 100" >
        <h3>Day Compleate</h3>
      </div>

      <ProgressBar v-else :progress></ProgressBar>

    </nav>
  </header>
</template>

<script setup name="Header">
import { ref } from "vue";
import { RouterLink } from "vue-router";
import { Icon } from '@iconify/vue';

import ProgressBar from "./ProgressBar.vue";

let progress = ref(30);
</script>

