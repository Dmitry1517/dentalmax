<script setup>
import '@/app/style/style.css'
import Header from '@/entities/Header.vue';
import { useRoute } from 'vue-router';

const route = useRoute()
console.log(route)
</script>

<template>
  <div>
    <Header />
    <RouterView />
  </div>
</template>

<style scoped></style>
