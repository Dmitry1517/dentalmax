<script setup>
import Logo from '@/shared/icons/Logo.vue'
const {color} = defineProps({
    color: String
})
</script>

<template>
    <div class="logo">
        <Logo :color="color" />
        <span class="logo__name" :style="{color: color}">ДентАлМакс</span>
    </div>
</template>

<style scoped>
.logo {
    display: flex;
    align-items: center;
    gap: 5px;
}

.logo__name {
    font-size: 30px;
}
</style>