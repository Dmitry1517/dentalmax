<template>
    <main class="main">
        <div class="page-header">
            <h1 class="page-title">Администраторы сайта</h1>
            <button class="btn-add">Добавить администратора</button>
        </div>
        
        <div class="table-card">
            <div class="grid-table">
        
            <!-- Header -->
            <div class="grid-row">
                <div class="cell cell--head">ФИО</div>
                <div class="cell cell--head">Почта</div>
                <div class="cell cell--head">Телефон</div>
                <div class="cell cell--head">Удалить</div>
            </div>
        
            <!-- Row 1 -->
            <div class="grid-row">
                <div class="cell cell--trunc"><span>Николаева Анна Сергеевна</span></div>
                <div class="cell cell--trunc"><span>anna.nik@mail.ru</span></div>
                <div class="cell">+7 924 356 78 88</div>
                <div class="cell"><button class="btn-delete">Удалить администратора</button></div>
            </div>
        
            <!-- Row 2 -->
            <div class="grid-row">
                <div class="cell cell--trunc"><span>Дмитриева Ольга Анатольевна</span></div>
                <div class="cell cell--trunc"><span>olga.dmi@mail.ru</span></div>
                <div class="cell">+7 924 356 78 88</div>
                <div class="cell"><button class="btn-delete">Удалить администратора</button></div>
            </div>
        
            </div>
        </div>
    </main>
</template>

<style scoped>
.main { max-width: 1280px; margin: 0 auto; padding: 36px 24px; }
 
 .page-header {
   display: flex;
   align-items: center;
   justify-content: space-between;
   margin-bottom: 24px;
 }

 .page-title { font-size: 22px; font-weight: 600; color: #222; }

 .btn-add {
   padding: 8px 20px;
   background: #1a3a6b;
   color: #fff;
   border: none;
   border-radius: 6px;
   font-size: 14px;
   font-weight: 500;
   font-family: 'Inter', sans-serif;
   cursor: pointer;
   transition: background 0.2s;
   white-space: nowrap;
 }
 .btn-add:hover { background: #24508f; }

 /* ── TABLE CARD ── */
 .table-card {
   background: #fff;
   border: 1px solid #000;
   border-radius: 12px;
   overflow: hidden;
   padding: 0 20px;
 }

 /* ── GRID TABLE ── */
 /* Columns: ФИО  Почта  Телефон  Действие */
 .grid-table {
   display: grid;
   grid-template-columns: 1fr 1fr 1fr 200px;
 }

 .cell {
   display: flex;
   align-items: center;
   padding: 16px 12px;
   font-size: 14px;
   color: #333;
   min-width: 0;
 }

 .cell--head {
   font-weight: 600;
   color: #444;
   padding-top: 20px;
   padding-bottom: 14px;
 }

 .cell--trunc span {
   display: block;
   width: 100%;
   overflow: hidden;
   text-overflow: ellipsis;
   white-space: nowrap;
 }

 .grid-row { display: contents; }
 .grid-row:hover .cell { background: #f8faff; }

 /* ── DELETE BUTTON ── */
 .btn-delete {
   padding: 6px 16px;
   background: #1a3a6b;
   color: #fff;
   border: none;
   border-radius: 5px;
   font-size: 13px;
   font-weight: 500;
   font-family: 'Inter', sans-serif;
   cursor: pointer;
   transition: background 0.2s;
   white-space: nowrap;
 }
 .btn-delete:hover { background: #24508f; }
</style>