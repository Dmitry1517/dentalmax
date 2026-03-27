<script setup>
import FooterHome from '@/entities/FooterHome.vue';
import TreatmentPlan from '@/shared/components/TreatmentPlan.vue';
import Star from '@/shared/icons/Star.vue';
import { reactive } from 'vue';

const fids = reactive([
      { image: 'АМ', name: 'Анастасия М', stars: 5, caption: 'Хочу оставить положительный отзыв, прохожу лечение в данной стоматологии . Всё очень нравиться , чистая и уютная стоматология . Приветливый персонал. Рекомендую эту стоматологию.' },
      { image: 'ВЦ', name: 'Виктор Цлавов', stars: 5, caption: 'Лучшая клиника с лучшими ценами и отличнейшими врачами. Сделали все качественно и быстро, а главное комфортно. Максим Сергеевич лучший! Буду приходить еще)' },
      { image: 'ЗГ', name: 'Зинаида Гришина', stars: 5, caption: 'Приятная, чистая, небольшая стоматология. Врачи очень располагающие и приятные. Лечили кариес, реставрировали зуб, делали чистку, все прошло отлично 👍🏼' },
      { image: 'О', name: 'Оксана', stars: 5, caption: 'Профессионалы своего дела, спасибо большое что вы есть, удобное расположение, доброжелательный коллектив🥰' },
      { image: 'ИК', name: 'Ирина Кислюк', stars: 5, caption: 'Мой лечащий врач Максим Сергеевич - очень внимательный, на предварительной консультации всё грамотно объяснил, рассказал. Сделал протезирование коронки. Рекомендую данного хирурга - ортопеда' },
      { image: 'АБ', name: 'Андрей Бубеев', stars: 5, caption: 'Спасибо большое работникам клиники за профессионализм,и очень благодарен за чуткое отношение, консультацию,решение проблем с зубами! Теперь улыбка, как у Гагарина!' },
      { image: 'ВЛ', name: 'Валентина Лобсанова', stars: 5, caption: 'Спасибо большое врачу стоматологу Максиму Сергеевичу Ламуеву. Работа была выполнена настолько аккуратно, безболезненно и быстро, что я даже не заметила, как все произошло. Ваши руки золото.' },
      { image: 'АН', name: 'Арюна Норбоева', stars: 5, caption: 'Были в разных стоматологических клиниках, но после посещения этой, можем сказать одно-лучшая! Отличные врачи! Благодарим врачей за их профессионализм и преданность своему делу! Спасибо за улыбки моих мужа и сына!' }
    ])
</script>

<template>
    <div class="fidback">
        <div class="fidback__title">ОТЗЫВЫ</div>
        <div class="fidback__text">Мы всегда готовы услышать Ваше мнение. Будем рады Вашей оценке</div>
    </div>
    <section class="fidback-items">
        <div class="fidback-items__wrapper">
            <div class="fidback-items__title">ДентАлМакс</div>
            <div class="fidback-items__marks">
                <span>4.9</span>
                <span><Star /><Star /><Star /><Star /><Star /></span>
            </div>
            <div class="fidback-items__info">1000 отзыв • 1528 оценок</div>
            <div class="fidback-items__getfid">
                <span>Поставьте нам оценку</span>
                <a href="https://2gis.ru/ulanude/firm/70000001087595702/tab/reviews?m=107.579869%2C51.829915%2F16%2Fr%2F1.99">Оставить отзыв</a>
            </div>
            <ul class="fidback-items__reviews">
                <li v-for="fid in fids" class="fidback-items__item">
                    <div class="fidback-items__user">
                        <div class="fidback-items__user-img">{{ fid.image }}</div> 
                        <span class="fidback-items__user-name">{{ fid.name }}</span>
                    </div>
                    <div><Star /><Star /><Star /><Star /><Star /></div>
                    <div>{{ fid.caption }}</div>
                </li>
            </ul>
            <a class="fidback-items__more" href="https://2gis.ru/ulanude/firm/70000001087595702/tab/reviews?m=107.579869%2C51.829915%2F16%2Fr%2F1.99">Больше отзывов на 2 ГИС</a>
        </div>
    </section>
    <TreatmentPlan />
    <FooterHome />
</template>

<style scoped>
.fidback {
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
    padding-bottom: 30px;
}
.fidback__title {
    font-size: 25px;
    font-weight: 600;
    color: var(--text-blue);
}

.fidback-items {
    background: var(--bg-blue-2);
}

.fidback-items__wrapper {
    padding: 20px;
    display: flex;
    flex-direction: column;
    gap: 15px;
}
.fidback-items__title {
    font-size: 30px;
}
.fidback-items__marks {
    display: flex;
    align-items: center;
    gap: 10px;
    font-size: 30px;
}
.fidback-items__getfid {
    background: var(--bg-blue);
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: space-between;
}
.fidback-items__getfid span {
    color: var(--text-white);
}
.fidback-items__getfid a {
    text-decoration: none;
    color: var(--text-blue);
    background: var(--bg-white);
    border: none;
    padding: 5px;
    border-radius: 5px;
    cursor: pointer;
}
.fidback-items__reviews {
    display: flex;
    flex-direction: column;
    gap: 20px;
}
.fidback-items__item {
    list-style-type: none;
    display: flex;
    flex-direction: column;
    gap: 10px;
}
.fidback-items__user {
    display: flex;
    align-items: center;
    gap: 20px;
}
.fidback-items__user-img {
    width: 60px;
    height: 60px;
    border-radius: 10px;
    background: var(--bg-white);
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 24px;
}
.fidback-items__more {
    background: var(--bg-blue);
    color: var(--text-white);
    padding: 10px 20px;
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    text-decoration: none;
}

@media all and (min-width: 1280px) {
    .fidback {
        width: 1280px;
        margin: 0 auto;
        padding: 30px 0px;
    }
    .fidback-items__wrapper {
        width: 1280px;
        margin: 0 auto;
        padding: 20px 0px;
    }
}
</style>