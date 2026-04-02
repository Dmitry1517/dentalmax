<script setup>
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import FooterHome from '@/entities/FooterHome.vue';
</script>

<template>
    <div class="services">
        <div class="services__title">Ортодонтическая стоматология</div>
        <span class="services-name">
            <span class="services__brad">Главная</span>
            <span class="services__brad"> > </span>
            <span class="services__brad">Услуги</span>
            <span class="services__brad"> > </span>
            <span class="services__brad">Ортодонтическая стоматология</span>
        </span>
        <section>
            Представьте, что ваши зубы — это идеальный пазл, который должен сложиться в ровную и красивую улыбку. Но иногда они начинают расти «как попало»: 
            скучиваются, выпячиваются или, наоборот, между ними появляются щели.

            Ортодонтия — это как раз та волшебная наука, которая помогает аккуратно, шаг за шагом, вернуть каждый зубик на своё правильное место. И чем раньше начать, 
            тем проще и быстрее пойдёт процесс — особенно у детей.

            Но хорошая новость в том, что исправить улыбку можно в любом возрасте! Сегодня для этого есть невидимые и почти незаметные системы (например, прозрачные 
            каппы или внутренние брекеты), о которых могут догадаться разве что самые близкие.
            
            Детям часто достаточно съёмной лёгкой пластинки, которая мягко направляет рост челюсти.
            Взрослым обычно рекомендуются брекеты или элайнеры — они справляются с более сложными задачами.
            Главное — это не просто красота. Ровные зубы легче чистить, они меньше разрушаются и дольше служат. А ещё — это про уверенность в себе, когда не нужно 
            стесняться своей улыбки.
            В «ДентАлМакс» мы как раз этим и занимаемся: помогаем и детям, и взрослым обрести здоровую, ровную улыбку, которая останется с ними на всю жизнь. 
            Приходите на консультацию — вместе найдём самое комфортное и эффективное решение именно для вас.
        </section>
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
