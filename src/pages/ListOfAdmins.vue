<template>
  <main class="main">
    <div class="page-header">
      <h1 class="page-title">Администраторы сайта</h1>
      <button class="btn-add" @click="openModal">Добавить администратора</button>
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
          <div class="cell"><button class="btn-delete" @click="deleteAdmin">Удалить администратора</button></div>
        </div>

        <!-- Row 2 -->
        <div class="grid-row">
          <div class="cell cell--trunc"><span>Дмитриева Ольга Анатольевна</span></div>
          <div class="cell cell--trunc"><span>olga.dmi@mail.ru</span></div>
          <div class="cell">+7 924 356 78 88</div>
          <div class="cell"><button class="btn-delete" @click="deleteAdmin">Удалить администратора</button></div>
        </div>

      </div>
    </div>

    <!-- Overlay -->
    <Transition name="fade">
      <div v-if="isModalOpen" class="overlay" @click.self="closeModal">

        <!-- Modal -->
        <div class="modal">
          <h2 class="modal__title">Новый администратор</h2>

          <div class="modal__fields">

            <div class="field-row">
              <span class="field-label">ФИО:</span>
              <div class="field-input-wrap">
                <input v-model="form.name" class="field-input" type="text" placeholder="Фамилия Имя Отчество" />
                <Pencil />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Телефон:</span>
              <div class="field-input-wrap">
                <input v-model="form.phone" class="field-input" type="tel" placeholder="+7 900 000 00 00" />
                <Pencil />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Email:</span>
              <div class="field-input-wrap">
                <input v-model="form.email" class="field-input" type="email" placeholder="name@mail.ru" />
                <Pencil />
              </div>
            </div>

          </div>

          <div class="modal__actions">
            <button class="btn-ok" @click="addAdmin">Ок</button>
            <button class="btn-cancel" @click="closeModal">Отмена</button>
          </div>
        </div>

      </div>
    </Transition>
  </main>
</template>

<script setup>
import Pencil from '@/shared/icons/Pencil.vue'
import { ref, reactive } from 'vue'

const isModalOpen = ref(false)

const form = reactive({
  name: '',
  phone: '',
  email: '',
})

const openModal = () => {
  isModalOpen.value = true
}

const closeModal = () => {
  isModalOpen.value = false
  form.name = ''
  form.phone = ''
  form.email = ''
}

const addAdmin = () => {
  console.log('новый админ добавлен')
  closeModal()
}

const deleteAdmin = () => {
  console.log('админ удален')
}
</script>

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

/* TABLE */
.table-card {
  background: #fff;
  border: 1px solid #000;
  border-radius: 12px;
  overflow: hidden;
  padding: 0 20px;
}

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

/* OVERLAY */
.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

/* MODAL */
.modal {
  background: #c8ddf5;
  border-radius: 16px;
  padding: 32px 36px;
  width: 460px;
  max-width: 90vw;
}

.modal__title {
  font-size: 18px;
  font-weight: 600;
  color: #222;
  text-align: center;
  margin-bottom: 28px;
}

.modal__fields {
  display: flex;
  flex-direction: column;
  gap: 14px;
  margin-bottom: 28px;
}

.field-row {
  display: flex;
  align-items: center;
  gap: 12px;
}

.field-label {
  font-size: 14px;
  color: #222;
  width: 80px;
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

.field-input-wrap svg {
  cursor: pointer;
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

/* MODAL BUTTONS */
.modal__actions {
  display: flex;
  gap: 12px;
  justify-content: center;
}

.btn-ok {
  padding: 9px 32px;
  background: #1a3a6b;
  color: #fff;
  border: none;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-ok:hover { background: #24508f; }

.btn-cancel {
  padding: 9px 32px;
  background: #fff;
  color: #1a3a6b;
  border: 1.5px solid #1a3a6b;
  border-radius: 6px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-cancel:hover { background: #f0f4fa; }

/* TRANSITION */
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>