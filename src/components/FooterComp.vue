<template>
  <footer class="sticky z-20 bottom-0 bg-slate-100 mt-4 px-4 py-2">
    <nav class="footer">
      <ul class="flex justify-around text-3xl">
        <li class="flex items-center  ">
          <Icon icon="mdi-light:clock" class="" />
          <h3 class="pl-4">Timeline</h3>
        </li>
        <li class="flex items-center">
          <Icon icon="material-symbols-light:browse-activity-outline" class="" />
          <h3 class="pl-4">Activites</h3>
        </li>
        <li class="flex items-center">
          <Icon icon="icomoon-free:spinner11" width="18" />
          <h3 class="pl-4">Progress</h3>
        </li>
      </ul>
    </nav>
  </footer>
</template>

<script setup>
import { Icon } from '@iconify/vue';
</script>

