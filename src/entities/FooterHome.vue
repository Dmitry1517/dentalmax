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
        <Button fs="10px" bg="rgba(0,0,0,0.2)">Лицензия и реквизиты клиники</Button>
        <a class="footer__text" href="#">Политика конфиденциальности</a>
        <div class="footer__chanels">
            <span class="footer__text">Наши каналы:</span>
            <VKicon />
            <TGicon />
        </div>
        <span class="footer__tel">Контактный телефон: +7 950 385 22 11</span>
        <span class="footer__time">Ежедневно 9:00-20:00</span>
        <span class="footer__adress">ул. Советская 14, 1 этаж</span>
        <span class="footer__text">Телефон для кандидатов: +7 900 000 00 00</span>
    </div>
</template>

<style scored>
.footer {
    padding: 0px 20px 30px 20px;
    display: flex;
    flex-direction: column;
    gap: 20px;
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
</style>