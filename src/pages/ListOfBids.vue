<script setup>
import LogoName from '@/shared/components/LogoName.vue';
</script>

<template>
    <main class="main">
    <h1 class="page-title">Заявки</h1>
    
    <div class="table-card">
        <div class="grid-table">
    
        <!-- Header -->
        <div class="grid-row">
            <div class="cell cell--head">№</div>
            <div class="cell cell--head">ФИО</div>
            <div class="cell cell--head">Email</div>
            <div class="cell cell--head">Номер телефона</div>
            <div class="cell cell--head">Выбранная дата</div>
            <div class="cell cell--head">Комментарии</div>
        </div>
    
        <!-- Row 1 -->
        <div class="grid-row">
            <div class="cell">1</div>
            <div class="cell cell--trunc"><span>Иванов Иван Иванович</span></div>
            <div class="cell cell--trunc"><span>ivan@mail.ru</span></div>
            <div class="cell">+7 900 000 00 00</div>
            <div class="cell">03.12.2025</div>
            <div class="cell"><button class="btn-read">Прочитать</button></div>
        </div>
    
        <!-- Row 2 -->
        <div class="grid-row">
            <div class="cell">2</div>
            <div class="cell cell--trunc"><span>Егоров Егор Егорович</span></div>
            <div class="cell cell--trunc"><span>egor@mail.ru</span></div>
            <div class="cell">+7 900 000 00 00</div>
            <div class="cell">04.12.2025</div>
            <div class="cell"><button class="btn-read">Прочитать</button></div>
        </div>
    
        <!-- Row 3 -->
        <div class="grid-row">
            <div class="cell">3</div>
            <div class="cell cell--trunc"><span>Атакишиева Алина Владимировна</span></div>
            <div class="cell cell--trunc"><span>atakishieva.alina@mail.ru</span></div>
            <div class="cell">+7 900 000 00 00</div>
            <div class="cell">04.12.2025</div>
            <div class="cell"><button class="btn-read">Прочитать</button></div>
        </div>
    
        </div>
    </div>
    </main>
</template>

<style scoped>
.header {
    background: #fff;
    display: flex;
    align-items: center;
}
.header__inner {
    width: 100%;
    max-width: 1280px;
    margin: 0 auto;
    padding: 0 24px;
    display: flex;
    align-items: center;
}

.logo {
    display: flex;
    align-items: center;
    gap: 10px;
    text-decoration: none;
    border-radius: 6px;
    flex-shrink: 0;
}
.logo__icon { width: 32px; height: 32px; flex-shrink: 0; }
.logo__text { font-size: 18px; font-weight: 600; color: #222; white-space: nowrap; }

.nav { display: flex; align-items: center; gap: 48px; margin-left: auto; }
.nav__link { font-size: 15px; color: #222; text-decoration: none; transition: color 0.2s; font-weight: 600; }
.nav__link:hover { color: #3a7bd5; }

/* MAIN */
.main { max-width: 1280px; margin: 0 auto; padding: 36px 24px; }
.page-title { font-size: 22px; font-weight: 600; color: #222; margin-bottom: 24px; }

/* TABLE CARD */
.table-card {
    background: #fff;
    border: 1px solid #000;
    border-radius: 12px;
    overflow: hidden;
    padding: 0 8px;
}

/* GRID TABLE — display:grid */
.grid-table {
    display: grid;
    grid-template-columns: 48px 1fr 1fr 170px 150px 130px;
}

/* Base cell */
.cell {
    display: flex;
    align-items: center;
    padding: 16px 12px;
    font-size: 14px;
    color: #333;
    min-width: 0;
}

/* Header cells */
.cell--head {
    font-weight: 600;
    color: #444;
    padding-top: 20px;
    padding-bottom: 14px;
}

/* Truncate */
.cell--trunc span {
    display: block;
    width: 100%;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}

/* Row hover via display:contents */
.grid-row { display: contents; }
.grid-row:hover .cell { background: #f8faff; }

/* Button */
.btn-read {
    padding: 6px 18px;
    background: #c8ddf5;
    color: #1a4a8a;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
}
.btn-read:hover { background: #a8c8ed; }
</style>