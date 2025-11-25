<script setup>
const {title, text, color} = defineProps({
    color: String,
    title: String,
    text: String,
    
})
</script>

<template>
  <div class="information">
      <span class="information__title" :style="{color: color}">{{ title }}</span>
      <span class="information__text" :style="{color: color}">{{ text }}</span>
  </div>
</template>

<style scoped>
.information {
  max-width: 1280px;
  margin: 0 auto;
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
  
}

.information__title {
  font-size: 20px;
}

@media all and (min-width: 1080px) {
  .information__title {
    font-size: 40px;
  }

  .information__text {
    font-size: 20px;
  }
}
</style>