<script setup>
import Information from '@/shared/components/Information.vue';
import Button from '@/shared/components/Button.vue';
</script>

<template>
    <div class="treatmentplan">
        <div class="treatmentplan__inner">
            <Information 
                title="Составим план лечения"
                text="Проанализируем состояние ваших зубов и дадим рекомендации по лечению"
                color="#fff"
            />
            <div class="treatmentplan__button"><Button color="#092147" bg="#fff">Записаться на приём</Button></div>
              
        </div>
    </div>
</template>

<style scoped>
.treatmentplan { 
    padding: 50px 0px;
}

.treatmentplan__inner {
    background: var(--bg-treatmentplan);
    padding: 30px 0px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.treatmentplan__button {
    padding: 0px 20px;
}
</style>