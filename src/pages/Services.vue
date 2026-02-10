<script setup>
import FooterHome from '@/entities/FooterHome.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
</script>

<template>
    <div class="services">
        <div class="services__title">СТОМАТОЛОГИЧЕСКИЕ УСЛУГИ</div>
        <ul class="services__list">
            <li class="services__item">Терапевтическая стоматология</li>
            <li class="services__item">Хирургическая стоматология</li>
            <li class="services__item">Имплантологическая стоматология</li>
            <li class="services__item">Ортопедическая стоматология</li>
            <li class="services__item">Ортодонтическая стоматология</li>
        </ul>
        <TreatmentPlan />
        <FooterHome />
    </div>
</template>

<style scoped>
.services__title {
  font-size: 25px;
  font-weight: 600;
  color: var(--text-blue);
  padding: 0px 20px;
}

.services__list {
    padding: 40px 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
    list-style-type: none;
    flex-wrap: wrap;
}

.services__item {
    border: 1px solid var(--bg-blue);
    color: var(--bg-blue);
    border-radius: 5px;
    padding: 5px 10px;
    font-size: 15px;
    cursor: pointer;
    width: fit-content;
    
}

@media all and (min-width: 768px) {
    .services__list {
        flex-direction: row;
    }
    .services__item {
        font-size: 18px;
    }
}
</style>