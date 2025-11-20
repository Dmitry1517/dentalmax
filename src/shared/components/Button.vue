<script setup>
const {color = '#fff', bg = '#383b68', fs = '20px'} = defineProps({
  color: String,
  bg: String,
  fs: String
})
</script>

<template>
    <button class="button" :style="{color: color, background: bg, fontSize: fs}">
        <slot />
    </button>
</template>

<style>
.button {
  border: none;
  outline: none;
  padding: 10px 15px;
  border-radius: 8px;
  cursor: pointer;
}
</style>

