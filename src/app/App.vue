<script setup>
import '@/app/style/style.css'
import Header from '@/entities/Header.vue'
import Registration from '@/pages/Registration.vue'
</script>

<template>
  <div>
    <Header v-if="!$route.meta.hideHeader" />
    <RouterView />
    <!-- <Registration /> -->
  </div>
</template>

<style scoped></style>
