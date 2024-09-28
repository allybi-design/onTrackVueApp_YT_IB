<template>
  <main class="flex min-h-screen flex-col">
    <HeaderComp />

    <RouterView class="container mx-auto flex flex-grow flex-col" />

    <FooterComp />  
  </main>
</template>

<script setup name="header">
// import { ref } from 'vue';
import { RouterView } from 'vue-router'

import HeaderComp from './components/HeaderComp.vue';
import FooterComp from './components/FooterComp.vue';



</script>
