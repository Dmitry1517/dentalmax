<script setup>
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import FooterHome from '@/entities/FooterHome.vue';
</script>

<template>
    <div class="services">
        <div class="services__title">Хирургическая стоматология</div>
        <span class="services-name">
            <RouterLink to="/"><span class="clinic__brad">Главная</span></RouterLink>
            <span class="services__brad"> > </span>
            <RouterLink to="/services"><span class="clinic__brad">Услуги</span></RouterLink>
            <span class="services__brad"> > </span>
            <span class="services__brad">Хирургическая стоматология</span>
        </span>
        <section class="services__text">
            Главная задача хирурга-стоматолога — не просто удалить, а сохранить и восстановить. Он действует как точный архитектор: 
            удаляет то, что угрожает здоровью, и создает надежную основу для будущей улыбки.<br /><br />

            В каких случаях она необходима?<br /><br />

            <ul style="padding: 0px 18px">
                <li>Удаление зуба: Только когда зуб уже разрушен настолько, что его невозможно спасти, или когда он угрожает «соседям» (например, дистопированный зуб мудрости).</li>
                <li>Подготовка к новой улыбке: Установка имплантата (искусственного корня) — это тоже ювелирная работа хирурга, который создает основу для 
                    идеальной и долговечной замены утраченного зуба.
                </li>
                <li>Спасение окружающих тканей: Иногда проблема не в самом зубе, а в десне или кости (кисты, воспаления). Хирург аккуратно устраняет очаг инфекции, 
                    чтобы защитить здоровые ткани.
                </li>
            </ul>
            <br />
            
            Самое важное: современная хирургия — это комфортно и предсказуемо.<br /><br />

            <ul style="padding: 0px 18px">
                <li>Без боли: Используется мощная и безопасная анестезия. Вы можете выбрать лечение даже в состоянии медикаментозного сна (седации), если чувствуете тревогу.</li>
                <li>Быстрое восстановление: Применяются атравматичные методики и современные шовные материалы, что сводит дискомфорт после процедуры к минимуму.</li>
                <li>Четкий план: Никаких сюрпризов. Весь процесс, от диагностики до реабилитации, планируется заранее с помощью 3D-снимков (КТ), чтобы результат был идеальным.</li>
            </ul>
            <br />

            Доверяйте здоровье вашей улыбки профессионалам, для которых ваши комфорт и безопасность — главный приоритет.<br /><br />

        </section>
        <section class="services__cards">
            <div class="services__cards-wrapper">
                <div class="service-card">

<!-- Фото -->
                    <div class="service-card__photo">
                        <img src="/public/breket-img.png" alt="title" class="service-card__img" />
                        <!-- <div class="service-card__photo-placeholder">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none">
                            <rect x="4" y="10" width="40" height="30" rx="3" stroke="#a0b4cc" stroke-width="2"/>
                            <circle cx="16" cy="20" r="4" stroke="#a0b4cc" stroke-width="2"/>
                            <path d="M4 34l10-8 8 6 6-5 16 9" stroke="#a0b4cc" stroke-width="2" stroke-linejoin="round"/>
                            </svg>
                        </div> -->
                    </div>

                    <!-- Тело карточки -->
                    <div class="service-card__body">
                    <h3 class="service-card__title">Брекет-система QUICK (Германия)</h3>
                    <p class="service-card__subtitle">Металическая самолигирующая брекет-система</p>

                    <ul class="service-card__list">
                        <li>
                            Способна подстроиться под каждый зуб из-за особенности конструкции скоб. Специльные выступы на скобах обеспечивают
                            Максимально плотное прилегание брекетов к зубам.
                        </li>
                        <li>
                            В составе не содержится никель, который довольно часто вызывает аллергические реакции.
                        </li>
                        <li>
                            Конструкция с загругленными сглаженными краями, у них нет острых углов и выступов. Вероятность травм, неудобство ношения
                            сведены к минимуму.
                        </li>
                    </ul>

                    <div class="service-card__footer">
                        <div class="service-card__price-wrap">
                        <span class="service-card__price-label">Стоимость:</span>
                        <span class="service-card__price">22000 руб.</span>
                        </div>
                        <button class="service-card__btn">Записаться</button>
                    </div>
                    </div>

                </div>
            </div>
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
  margin-top: 20px;
}
.services__title {
  font-size: 25px;
  font-weight: 600;
  color: var(--text-blue);
}

a {
  text-decoration: none;
  color: var(--text-grey-4);
}

.services__text {
    padding: 30px 0px;
}

.service-card {
  background: #ddeaf8;
  border-radius: 16px;
  overflow: hidden;
  width: 370px;
  display: flex;
  flex-direction: column;
  font-family: 'Inter', sans-serif;
}

/* ── ФОТО ── */
.service-card__photo {
  width: 100%;
  height: 140px;
  flex-shrink: 0;
  overflow: hidden;
  padding: 10px;
}

.service-card__img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  border-radius: 10px;
}

.service-card__photo-placeholder {
  width: 100%;
  height: 100%;
  background: #c8d8e8;
  display: flex;
  align-items: center;
  justify-content: center;
}

/* ── ТЕЛО ── */
.service-card__body {
  padding: 16px 18px 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}

.service-card__title {
  font-size: 16px;
  font-weight: 600;
  color: #1a2e4a;
  line-height: 1.3;
}

.service-card__subtitle {
  font-size: 13px;
  font-weight: 500;
  color: #333;
}

/* ── СПИСОК ── */
.service-card__list {
  list-style: disc;
  padding-left: 18px;
  display: flex;
  flex-direction: column;
  gap: 8px;
  flex: 1;
}

.service-card__list li {
  font-size: 13px;
  color: #333;
}

/* ── ФУТЕР ── */
.service-card__footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  margin-top: 4px;
}

.service-card__price-wrap {
  display: flex;
  align-items: center;
  gap: 8px;
}

.service-card__price-label {
  font-size: 13px;
  color: #555;
}

.service-card__price {
  font-size: 14px;
  font-weight: 600;
  color: #1a2e4a;
  background: #fff;
  border-radius: 6px;
  padding: 4px 10px;
  white-space: nowrap;
}

.service-card__btn {
  padding: 5px 15px;
  background: #1a3a6b;
  color: #fff;
  border: none;
  border-radius: 8px;
  font-size: 13px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
}

.slide-content {
  position: relative;
  overflow: hidden;
  transition: transform 0.3s ease;
  height: 100%;
  margin: 5px;
}

.slide-image {
  position: relative;
  width: 256px;
  height: 320px;
  border-radius: 12px;
  background: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-size: 16px;
  margin: 0 auto;
}

.slide-caption {
  padding: 15px;
  text-align: center;
  font-size: 18px;
  color: var(--text-black);
  line-height: 1.4;
  margin-top: 10px;
}

.service-card__btn:hover { background: #24508f; }

.doctors {
    padding: 30px 0px;
}

.doctors__title {
    font-size: 25px;
    font-weight: 600;
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