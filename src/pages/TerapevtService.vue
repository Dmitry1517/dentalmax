<script setup>
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import FooterHome from '@/entities/FooterHome.vue';
</script>

<template>
    <div class="services">
        <div class="services__title">Терапевтическая стоматология</div>
        <span class="services-name">
            <span class="services__brad">Главная</span>
            <span class="services__brad"> > </span>
            <span class="services__brad">Услуги</span>
            <span class="services__brad"> > </span>
            <span class="services__brad">Терапевтическая стоматология</span>
        </span>
        <TreatmentPlan />
    </div>
    <FooterHome />
</template>

<style scoped>
.services {
    width: 100%;
    margin: 0 auto;
    margin-top: 10px;
}
.services-name {
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 14px;
  color: var(--text-grey-4);
  padding: 0px 20px;
  margin-top: 20px;
}
.services__title {
  font-size: 25px;
  font-weight: 600;
  color: var(--text-blue);
  padding: 0px 20px;
}

@media all and (min-width: 768px) {
    .services__item {
        font-size: 18px;
    }
}

@media all and (min-width: 1280px) {
    .services {
        width: 1280px;
    }
}
</style>