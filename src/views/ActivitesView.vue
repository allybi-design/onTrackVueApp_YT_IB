<template>
  <div>
    <h1>
      ActivitesView
    </h1>
    <ul>
      <li>
        <div>
          <BaseButton >
            <Icon icon="mdi:trash-can-outline" height="1.1em" class="text-4xl " @click="emit('selectChanged', 0)" />
          </BaseButton>
          <span>Reading</span>
        </div>
        <div>
         
        </div>
      </li>
    </ul>

  </div>
</template>

<script setup>
import BaseButton from '@/components/BaseButton.vue';


import { Icon } from '@iconify/vue';
</script>
