<template>
  <main class="flex min-h-screen flex-col">
    <HeaderComp />

    <RouterView class="container mx-auto flex flex-grow flex-col drop-shadow-2xl prose lg:prose-xl " />

    <FooterComp />
  </main>
</template>

<script setup>
// import { ref } from 'vue';
import { RouterView } from 'vue-router'

import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';

import { initTimeLineItems } from '@/utils/timeline-items';

initTimeLineItems();

</script>
