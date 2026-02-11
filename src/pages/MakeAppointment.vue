<script setup>
import FooterHome from '@/entities/FooterHome.vue';

</script>

<template>
    <div class="appointment">
        <h1 class="appointment__title">Запись на приём</h1>
        <section class="left-side">
            <div class="left-side__map">
                <div style="position:relative;overflow:hidden;">
                    <a href="https://yandex.ru/maps/54/yekaterinburg/?utm_medium=mapframe&utm_source=maps" style="color:#eee;font-size:12px;position:absolute;top:0px;">Екатеринбург</a>
                    <a href="https://yandex.ru/maps/54/yekaterinburg/house/sovetskaya_ulitsa_14/YkkYcARiSU0AQFtsfXR0cXVkbA==/?ll=60.632086%2C56.850979&utm_medium=mapframe&utm_source=maps&z=17.12" style="color:#eee;font-size:12px;position:absolute;top:14px;">Советская улица, 14 — Яндекс Карты</a>
                    <iframe src="https://yandex.ru/map-widget/v1/?ll=60.632086%2C56.850979&mode=search&ol=geo&ouri=ymapsbm1%3A%2F%2Fgeo%3Fdata%3DCgg1NjA4ODU4MxJy0KDQvtGB0YHQuNGPLCDQodCy0LXRgNC00LvQvtCy0YHQutCw0Y8g0L7QsdC70LDRgdGC0YwsINCV0LrQsNGC0LXRgNC40L3QsdGD0YDQsywg0KHQvtCy0LXRgtGB0LrQsNGPINGD0LvQuNGG0LAsIDE0IgoNQ4dyQhVmZ2NC&z=17.12" width="500" height="500" frameborder="0" allowfullscreen="true" style="position:relative; border-radius: 10px;"></iframe>
                </div>
            </div>
            <ul class="left-side__list">
                <li class="left-side__item">
                    <img src="/public/clock.png" alt="clock">
                    <div class="left-side__info">
                        <span class="left-side__title">Открыты</span>
                        <span class="left-side__text">Ежедневно с 9:00 до 20:00</span>
                    </div>
                </li>
                <li class="left-side__item">
                    <div class="left-side__icon"><img src="/public/point-map.png" alt="point"></div>
                    <div class="left-side__info">
                        <span class="left-side__title">Наша почта</span>
                        <span class="left-side__text">Smile01@gmail.com</span>
                    </div>
                </li>
                <li class="left-side__item">
                    <div class="left-side__icon"><img src="/public/phone.png" alt="phone"></div>
                    <div class="left-side__info">
                        <span class="left-side__title">Наш телефон</span>
                        <span class="left-side__text">+7 950 385 22 11</span>
                    </div>
                </li>
                
            </ul>
        </section>
        <ul class="left-side__list">
            <li class="left-side__item">
                <div class="left-side__icon"><img src="/public/point-map.png" alt="point"></div>
                <div class="left-side__info">
                    <span class="left-side__title">Адрес клиники</span>
                    <span class="left-side__text">ул. Советская 14, 1 этаж</span>
                </div>
            </li>
            <li class="left-side__item">
                <img src="/public/clock.png" alt="clock">
                <div class="left-side__info">
                    <span class="left-side__title">Открыты</span>
                    <span class="left-side__text">Ежедневно с 9:00 до 20:00</span>
                </div>
            </li>
            <li class="left-side__item">
                <div class="left-side__icon"><img src="/public/point-map.png" alt="point"></div>
                <div class="left-side__info">
                    <span class="left-side__title">Наша почта</span>
                    <span class="left-side__text">Smile01@gmail.com</span>
                </div>
            </li>
            <li class="left-side__item">
                <div class="left-side__icon"><img src="/public/phone.png" alt="phone"></div>
                <div class="left-side__info">
                    <span class="left-side__title">Наш телефон</span>
                    <span class="left-side__text">+7 950 385 22 11</span>
                </div>
            </li>
        </ul>
        <form class="appointment__form">
            <div class="user-fields">
                <label class="user-field">
                    <span class="user-field__title">Фамилия Имя Отчество</span>
                    <input class="user-field__input" type="text" placeholder="Ваше ФИО" />
                </label>

                <label class="user-field">
                    <span class="user-field__title">Email</span>
                    <input class="user-field__input" type="text" placeholder="you@mail.ru" />
                </label>

                <label class="user-field">
                    <span class="user-field__title">Ваш номер телефона</span>
                    <input class="user-field__input" type="tel" placeholder="+7 (900) 000-0000" />
                </label>

                <label class="user-field">
                    <span class="user-field__title">Выберите предварительную дату посещения</span>
                    <div style="position: relative;">
                        <input id="select-date" class="user-field__input" type="date" />
                        <img src="/public/chevron-down.png" alt="down" class="user-field__down">
                    </div>
                </label>
            </div>
            

            <label class="user-field">
                <span class="user-field__title">Вопрос обращения, наименование услуги</span>
                <textarea class="user-field__input user-field__textarea" placeholder=""></textarea>
            </label>

            <label class="checkbox">
                <input type="checkbox" class="checkbox__input" />
                    <span class="checkbox__state">
                    <span class="checkbox__control">
                        <img src="/public/check.png" alt="check" class="checkbox__checked">                       
                    </span>
                    <span class="checkbox__label">Я даю согласие на рассылку</span>
                </span>                                                                      
            </label>

            <label class="checkbox">
                <input type="checkbox" class="checkbox__input" />
                    <span class="checkbox__state">
                    <span class="checkbox__control">
                        <img src="/public/check.png" alt="check" class="checkbox__checked">                        
                    </span>
                    <span class="checkbox__label">Я даю согласие на <b class="checkbox__label_bold">обработку персональных данных</b></span>
                </span>
                
            </label>

            <p class="appointment__text">Нажимая кнопку, вы даёте согласие на обработку персональных данных и 
                соглашаетесь с политикой конфиденциальности.
            </p>

            <!-- Компонент кнопки -->
            <div class="form__button">
                <RouterLink to="/appointment-completed"><button>Записаться на приём</button></RouterLink>
            </div>
        </form>
    </div>
    <FooterHome />
</template>

<style scoped>
.appointment__title {
    font-size: 25px;
    font-weight: 600;
    color: var(--text-blue);
    padding: 0px 20px;
}

.left-side {
    display: none;
}

.left-side__list {
    display: none;
}

.appointment__form {
    margin: 40px 0px;
    padding: 0px 20px;
    display: flex;
    flex-direction: column;
    gap: 30px;
}

/* Компонент user-field */

.user-fields {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.user-field {
    display: flex;
    flex-direction: column;
    gap: 5px;
}

.user-field__title {
    color: var(--text-grey-1);
    font-size: 18px;
    font-weight: 500;
}

.user-field__input {
    width: 100%;
    border: 1px solid var(--text-light-grey);
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
    border-radius: 10px;
    padding: 20px 16px;
    font-size: 16px;
}

.user-field__input::placeholder {
    color: var(--text-grey-3);
}

.user-field__textarea {
    resize: none;
    height: 120px;
}

.user-field__down {
    position: absolute;
    width: 25px;
    height: 25px;
    right: 15px;
    top: 20px;
}


/* CHECKBOX */

.checkbox__input {
    position: absolute;
    clip: rect(0, 0, 0, 0);
    opacity: 0;
}

.checkbox__state {
    display: flex;
    align-items: center;
    cursor: pointer;
    gap: 20px;
}

.checkbox__control {
    width: 20px;
    min-width: 20px;
    height: 20px;
    background: var(--bg-white);
    border: 1px solid var(--text-grey-2);
    border-radius: 4px;
    display: inline-flex;
    position: relative;
}

input[type="date"] {
  font-family: 'Inter', sans-serif;
  color: var(--text-grey-3);
  font-size: 17px;
}

input[type="date"]::-webkit-datetime-edit {
  font-family: 'Inter', sans-serif;
  color: var(--text-grey-3);
  font-size: 17px;
}

input[type="date"]::-webkit-calendar-picker-indicator {
  opacity: 0;
  position: absolute;
  width: 100%;
  height: 100%;
  cursor: pointer;
}

.checkbox__label {
    color: var(--text-blue);
    font-size: 17px;
}

.checkbox__checked {
    display: none;
}

.checkbox__input:checked ~ .checkbox__state .checkbox__checked {
    display: block;
}

.appointment__text {
    color: var(--text-blue);
    font-size: 13px;
}

.form__button {
    display: flex;
    justify-content: center;
}

.form__button button {
    background: var(--bg-blue);
    padding: 15px 30px;
    border-radius: 10px;
    border: none;
    cursor: pointer;
    color: var(--text-white);
    font-size: 20px;
}


@media all and (min-width: 768px) {
    .appointment__form {
        padding: 0px 60px;
    }
    
    .user-field__title {
        font-size: 22px;
    }

    .left-side__list {
        padding: 0px 60px;
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        gap: 15px;
        margin-top: 30px;
    }

    .left-side__item {
        display: flex;
        align-items: center;
        gap: 15px;
        background: var(--bg-white);
        border-radius: 8px; /* можно настроить */
        box-shadow: 
            0 1px 3px rgba(0, 0, 0, 0.03),
            0 4px 12px rgba(0, 0, 0, 0.04);
        padding: 15px;
    }

    .left-side__info {
        display: flex;
        flex-direction: column;
        gap: 5px;
    }

    .left-side__title {
        font-size: 18px;
        font-weight: 600;
    }

    .left-side__text {
        font-size: 16px;
    }
}

@media all and (min-width: 1280px) {
    .appointment {
        display: flex;
        gap: 30px;
    }
    .appointment__title {
        display: none;
    }
    .appointment__form {
        border: 1px solid var(--bg-blue);
        border-radius: 10px;
        padding: 50px;
    }
    .user-fields {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .left-side {
        display: flex;
        flex-direction: column;
        gap: 30px;
    }

    .left-side__map {
        width: 500px;
        height: 500px;
    }

    .left-side__list {
        display: flex;
        flex: 1;
        flex-direction: column;
        justify-content: space-between;
    }
}

</style>