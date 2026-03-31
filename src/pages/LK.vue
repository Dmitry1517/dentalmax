<script setup>
import Pencil from '@/shared/icons/Pencil.vue';
</script>

<template>
  <main>
    <h1 class="page-title">Личный кабинет</h1>
  
    <div class="profile-card">
  
      <!-- ФИО -->
      <div class="field-row">
        <span class="field-label">ФИО:</span>
        <div class="field-input-wrap">
          <input class="field-input" type="text" value="Фамилия Имя Отчество" />
          <button class="btn-edit" aria-label="Редактировать ФИО">
            <Pencil />
          </button>
        </div>
      </div>
  
      <!-- Телефон -->
      <div class="field-row">
        <span class="field-label">Телефон:</span>
        <div class="field-input-wrap">
          <input class="field-input" type="tel" value="+7 900 000 00 00" />
          <button class="btn-edit" aria-label="Редактировать телефон">
            <Pencil />
          </button>
        </div>
      </div>
  
      <!-- Email -->
      <div class="field-row">
        <span class="field-label">Email:</span>
        <div class="field-input-wrap">
          <input class="field-input" type="email" value="name@mail.ru" />
          <button class="btn-edit" aria-label="Редактировать email">
            <Pencil />
          </button>
        </div>
      </div>
  
      <!-- Пароль -->
      <div class="field-row">
        <span class="field-label">Пароль:</span>
        <div class="field-input-wrap">
          <input class="field-input" type="password" value="dfkgjni45858" />
          <button class="btn-edit" aria-label="Редактировать пароль">
            <Pencil />
          </button>
        </div>
      </div>
  
  
    </div>
  
    <RouterLink to="/administrator"><button class="btn-logout">Выйти из аккаунта</button></RouterLink>
  </main>
</template>

<style scoped>
main {
      max-width: 1280px;
      margin: 0 auto;
      padding: 36px 24px;
    }
 
    .page-title {
      font-size: 22px;
      font-weight: 600;
      color: #222;
      margin-bottom: 32px;
    }
 
    /* ── PROFILE CARD ── */
    .profile-card {
      background: #ddeaf8;
      border-radius: 12px;
      padding: 24px 28px;
      display: inline-flex;
      flex-direction: column;
      gap: 14px;
      min-width: 420px;
    }
 
    /* ── FIELD ROW ── */
    .field-row {
      display: flex;
      align-items: center;
      gap: 16px;
    }
 
    .field-label {
      font-size: 15px;
      color: #222;
      width: 90px;
      flex-shrink: 0;
    }
 
    .field-input-wrap {
      display: flex;
      align-items: center;
      gap: 8px;
      background: #fff;
      border-radius: 6px;
      padding: 7px 12px;
      flex: 1;
    }
 
    .field-input {
      border: none;
      outline: none;
      font-family: 'Inter', sans-serif;
      font-size: 14px;
      color: #333;
      background: transparent;
      width: 100%;
    }
 
    .field-input::placeholder { color: #999; }
 
    /* Edit icon button */
    .btn-edit {
      background: none;
      border: none;
      cursor: pointer;
      padding: 2px;
      color: #555;
      display: flex;
      align-items: center;
      flex-shrink: 0;
      transition: color 0.2s;
    }
    .btn-edit:hover { color: #1a3a6b; }
 
    /* ── LOGOUT BUTTON ── */
    .btn-logout {
      margin-top: 32px;
      display: block;
      align-items: center;
      padding: 12px 24px;
      background: #1a3a6b;
      color: #fff;
      border: none;
      border-radius: 8px;
      font-size: 15px;
      font-weight: 500;
      font-family: 'Inter', sans-serif;
      cursor: pointer;
      transition: background 0.2s;
    }
    .btn-logout:hover { background: #24508f; }
</style>
