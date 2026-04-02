<script setup>
import FooterHome from '@/entities/FooterHome.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
</script>

<template>
    <div class="services">
        <div class="services__title">СТОМАТОЛОГИЧЕСКИЕ УСЛУГИ</div>
        <span class="services-name">
            <span class="services__brad">Главная</span>
            <span class="services__brad"> > </span>
            <span class="services__brad">Услуги</span>
        </span>
        <ul class="services__list">
            <RouterLink to="/terapevt" class="services__item">Терапевтическая стоматология</RouterLink>
            <RouterLink to="/hirurg" class="services__item">Хирургическая стоматология</RouterLink>
            <RouterLink to="/implant" class="services__item">Имплантологическая стоматология</RouterLink>
            <RouterLink to="/ortoped" class="services__item">Ортопедическая стоматология</RouterLink>
            <RouterLink to="/ortodont" class="services__item">Ортодонтическая стоматология</RouterLink>
        </ul>
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
    transition: 0.3s all;
    text-decoration: none;
}

.services__item:hover {
    color: var(--bg-white);
    background: var(--bg-blue)
}

@media all and (min-width: 768px) {
    .services__list {
        flex-direction: row;
    }
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