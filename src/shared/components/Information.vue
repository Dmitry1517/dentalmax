<script setup>
const {title, text, color} = defineProps({
    title: String,
    text: String,
    color: String
})
</script>

<template>
    <div class="information">
        <span class="information__title" :style="{color: color}">{{ title }}</span>
        <span class="information__text" :style="{color: color}">{{ text }}</span>
    </div>
</template>

<style>
.information {
  padding: 0px 20px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.information__title {
  font-size: 20px;
}
</style>