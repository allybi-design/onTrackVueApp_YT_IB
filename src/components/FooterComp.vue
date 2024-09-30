<template>
  <footer class="sticky z-20 bottom-0 ">
    <nav class="footer">
      <ul class="flex justify-around text-3xl  bg-slate-300 mt-4 ">
  
        <RouterLink v-for="route in routes" :key="route.name" :to="route.path" class="flex w-full justify-center items-center py-2 hover:bg-slate-200">
          <Icon :icon="route.icon" class="" />
          <h3 class="pl-4">{{ route.name }}</h3>
        </RouterLink>

      </ul>
    </nav>
  </footer>
</template>

<script setup>
// import { computed } from 'vue';
import { Icon } from '@iconify/vue';
import { RouterLink } from 'vue-router';

const routes = [
  { name: 'Timeline', path: '/timeline', icon: "mdi-light:clock"},
  { name: 'Activites', path: '/activites', icon: "material-symbols-light:lists"},
  { name: 'Progress', path: '/progress', icon: "mdi-light:chart-bar"},
];
</script>

<style scoped>
.router-link-active, .router-link-exact-active {
  @apply bg-slate-400 pointer-events-none;
} 


</style>

