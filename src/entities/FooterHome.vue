<script setup>
import LogoName from '@/shared/components/LogoName.vue'
import TGicon from '@/shared/icons/TGicon.vue';
import VKicon from '@/shared/icons/VKicon.vue';
import Button from '@/shared/components/Button.vue';

</script>

<template>
    <div class="footer">
        <LogoName color="#092147" />
        <span class="footer__ofert">Сайт не является публичной офертой</span>
        <div class="footer__info">
            <div class="footer__left">
                <a class="footer__text" href="#">Лицензия и реквизиты клиники</a>
                <a class="footer__text" href="#">Политика конфиденциальности</a>
                <div class="footer__chanels">
                    <span class="footer__text">Наши каналы:</span>
                    <VKicon />
                    <TGicon />
                </div>
            </div>
            <div class="footer__right">
                <span class="footer__tel">Контактный телефон: +7 950 385 22 11</span>
                <span class="footer__time">Ежедневно 9:00-20:00</span>
                <span class="footer__adress">ул. Советская 14, 1 этаж</span>
                <span class="footer__text">Телефон для кандидатов: +7 900 000 00 00</span>
            </div>
        </div>
    </div>
</template>

<style scored>
.footer {
    padding: 0px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer__left, .footer__right {
    display: flex;
    flex-direction: column;
    gap: 20px;
}

.footer__info {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.footer__chanels {
    display: flex;
    align-items: center;
    gap: 20px;
}

.footer__ofert {
    font-size: 10px;
    color: #383b68;
}

.footer__text {
    color: #091247;
    font-size: 10px;
}

.footer__tel, .footer__time {
    color: #091247;
    font-size: 15px;
}

.footer__adress {
    color: #091247;
    font-size: 15px;
    font-weight: 600;
}

.footer button {
    align-self: flex-start;
}

@media all and (min-width: 768px) {
    .footer__info {
        justify-content: space-between;
        flex-direction: row-reverse;
        gap: 20px;
    }
    
    .footer__ofert,
    .footer__text,
    .footer__tel,
    .footer__time,
    .footer__adress {
        font-size: 16px;
    }
}
</style>