<script setup>
import '@/app/style/style.css'
import Header from '@/entities/Header.vue'

import { computed } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()

const headerTextColor = computed(() => {
  return route.path === '/' ? '#fff' : '#092147'
})

const headerBg = computed(() => {
  return route.path === '/'
})
</script>

<template>
  <div>
    <Header v-if="!$route.meta.hideHeader" :textColor="headerTextColor" :headerBg="headerBg" />
    <RouterView />
  </div>
</template>

<style scoped></style>
