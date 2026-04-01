<template>
    <section class="content-wrapper">
  
      <!-- Верхняя панель -->
      <div class="top-panel">
        <div class="top-panel__actions">
          <button class="btn-action">Добавить специалиста</button>
          <button class="btn-action">Добавить вид деятельности</button>
        </div>
  
        <div class="top-panel__filter">
          <p class="filter__label">Фильтр:</p>
          <div class="filter__fields">
            <div class="filter__field">
              <label class="filter__field-label">Найти:</label>
              <input class="filter__input" type="text" />
            </div>
            <div class="filter__field">
              <label class="filter__field-label">Вид специальности:</label>
              <select class="filter__input filter__select">
                <option value="">Все</option>
                <option>Хирург-имплантолог</option>
                <option>Стоматолог-ортопед</option>
                <option>Стоматолог-терапевт</option>
                <option>Стоматолог-ортопед</option>
                <option>Пародонотолог</option>
                <option>Стоматолог-хирург</option>
              </select>
            </div>
          </div>
        </div>
      </div>
  
      <!-- Таблица -->
      <div class="table-wrap">
        <div class="grid-table">
  
          <div class="grid-row">
            <div class="cell cell--head">Номер</div>
            <div class="cell cell--head">Фамилия Имя Отчество</div>
            <div class="cell cell--head">Специальность</div>
            <div class="cell cell--head">Данные специалиста</div>
          </div>
  
          <div v-for="(service, i) in services" :key="i" class="grid-row">
            <div class="cell">{{ service.number }}</div>
            <div class="cell">{{ service.name }}</div>
            <div class="cell">{{ service.type }}</div>
            <div class="cell">
              <button class="btn-edit">Изменить данные</button>
            </div>
          </div>
  
        </div>
      </div>
  
    </section>
  </template>
  
  <script setup>
  const services = [
    { number: '0001', name: 'Ламуева Марина Нимбуева', type: 'Терапевт' },
    { number: '0001', name: 'Ламуева Марина Нимбуева', type: 'Терапевт' },    
    { number: '0001', name: 'Кто То Еще', type: 'Терапевт' },    
    { number: '0001', name: 'Кто То Еще', type: 'Терапевт' },    
  ]
  </script>
  
  <style scoped>
  /* ── WRAPPER ── */
  .content-wrapper {
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 16px;
    min-width: 0;
  }
  
  /* ── TOP PANEL — белый блок с бордером ── */
  .top-panel {
  display: flex;
  gap: 16px;
  align-items: flex-start;
  border: 1.5px solid #c0cfe8;
  border-radius: 16px;
  padding: 20px;
  background: #1a3a6b;
}

.top-panel__actions {
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.btn-action {
  padding: 10px 20px;
  background: #fff;
  color: #1a3a6b;
  border: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 500;
  font-family: 'Inter', sans-serif;
  cursor: pointer;
  transition: background 0.2s;
  white-space: nowrap;
  min-width: 180px;
}
.btn-action:hover { background: #e8f0fb; }

.top-panel__filter {
  flex: 1;
  border: 1.5px solid #c0cfe8;
  border-radius: 10px;
  padding: 14px 18px;
  background: #fff;
}

.filter__label {
  font-size: 13px;
  font-weight: 600;
  color: #444;
  margin-bottom: 10px;
}

.filter__fields {
  display: flex;
  flex-direction: column;
  gap: 8px;
}

.filter__field {
  display: flex;
  align-items: center;
  gap: 10px;
}

.filter__field-label {
  font-size: 13px;
  color: #444;
  width: 100px;
  flex-shrink: 0;
}

.filter__input {
  flex: 1;
  padding: 6px 10px;
  border: 1.5px solid #c0cfe8;
  border-radius: 6px;
  font-size: 13px;
  font-family: 'Inter', sans-serif;
  color: #333;
  outline: none;
  background: #ddeaf8;
  transition: border-color 0.2s;
}
.filter__input:focus { border-color: #1a3a6b; }
.filter__select { cursor: pointer; }
  
  /* ── TABLE — отдельный белый блок с бордером ── */
  .table-wrap {
    border: 1.5px solid #000;
    border-radius: 16px;
    padding: 0 12px;
    background: #fff;
    overflow: hidden;
  }
  
  .grid-table {
    display: grid;
    grid-template-columns: 90px 1fr 160px 160px;
  }
  
  .cell {
    display: flex;
    align-items: center;
    padding: 12px 10px;
    font-size: 14px;
    color: #333;
    min-width: 0;
  }
  
  .cell--head {
    font-weight: 600;
    color: #444;
    padding-top: 16px;
    padding-bottom: 12px;
  }
  
  .grid-row { display: contents; }
  .grid-row:hover .cell { background: #f8faff; }
  
  /* ── EDIT BUTTON ── */
  .btn-edit {
    padding: 5px 14px;
    background: #c8ddf5;
    color: #1a3a6b;
    border: none;
    border-radius: 5px;
    font-size: 13px;
    font-weight: 500;
    font-family: 'Inter', sans-serif;
    cursor: pointer;
    transition: background 0.2s;
    white-space: nowrap;
  }
  .btn-edit:hover { background: #a8c8ed; }
  </style>