<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <article class="justify-center">
    <div class="grid place-self-center mx-auto">
      <h1 class="text-3xl">Page Not Found</h1>
      <h3 class="text-xl">redirect to
        <RouterLink to="/">Home</RouterLink>
      </h3>
    </div>
  </article>
</template>
