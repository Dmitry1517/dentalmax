<script setup>
const {color = '#fff', bg = '#383b68'} = defineProps({
  color: String,
  bg: String
})
</script>

<template>
    <button class="button" :style="{color: color, background: bg}">
        <slot />
    </button>
</template>

<style>
.button {
  border: none;
  outline: none;
  /* background: #383b68; */
  padding: 10px 15px;
  border-radius: 8px;
  font-size: 20px;
  /* color: #fff; */
  cursor: pointer;
}
</style>