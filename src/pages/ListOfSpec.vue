<template>
  <section class="content-wrapper">
    <!-- Верхняя панель -->
    <div class="top-panel">
      <div class="top-panel__actions">
        <button class="btn-action" @click="openAddDoctorModal">Добавить специалиста</button>
        <button class="btn-action" @click="openAddSpecialityModal">
          Добавить вид специальности
        </button>
      </div>

      <div class="top-panel__filter">
        <p class="filter__label">Фильтр:</p>
        <div class="filter__fields">
          <div class="filter__field">
            <label class="filter__field-label">Найти:</label>
            <input
              class="filter__input"
              type="text"
              v-model="searchQuery"
              placeholder="Поиск по ФИО..."
            />
          </div>
          <div class="filter__field">
            <label class="filter__field-label">Вид специальности:</label>
            <select class="filter__input filter__select" v-model="selectedSpeciality">
              <option value="">Все</option>
              <option
                v-for="speciality in specialities"
                :key="speciality.id"
                :value="speciality.name"
              >
                {{ speciality.name }}
              </option>
            </select>
          </div>
        </div>
      </div>
    </div>

    <!-- Сообщение об ошибке -->
    <div v-if="errorMessage" class="error-message">
      {{ errorMessage }}
      <button class="close-btn" @click="errorMessage = ''">×</button>
    </div>

    <!-- Лоадер -->
    <div v-if="isLoading" class="loader">
      <div class="spinner"></div>
    </div>

    <!-- Таблица -->
    <div v-else class="table-wrap">
      <div class="grid-table">
        <div class="grid-row grid-row--header">
          <div class="cell cell--head">Номер</div>
          <div class="cell cell--head">Фамилия Имя Отчество</div>
          <div class="cell cell--head">Специальность</div>
          <div class="cell cell--head">Данные специалиста</div>
        </div>

        <div v-for="doctor in filteredDoctors" :key="doctor.id" class="grid-row">
          <div class="cell">{{ doctor.id }}</div>
          <div class="cell cell--name">{{ doctor.fio || '—' }}</div>
          <div class="cell">{{ doctor.speciality?.name || '—' }}</div>
          <div class="cell">
            <button class="btn-edit" @click="openEditDoctorModal(doctor)">Изменить данные</button>
          </div>
        </div>

        <!-- Пустое состояние -->
        <div v-if="filteredDoctors.length === 0" class="empty-state">
          {{ doctors.length === 0 ? 'Нет специалистов' : 'Ничего не найдено' }}
        </div>
      </div>
    </div>

    <!-- Модальное окно добавления специалиста -->
    <Transition name="fade">
      <div v-if="isDoctorModalOpen" class="overlay" @click.self="closeDoctorModal">
        <div class="modal">
          <h2 class="modal__title">Новый специалист</h2>

          <div class="modal__fields">
            <div class="field-row">
              <span class="field-label">ФИО: <span class="required">*</span></span>
              <div class="field-input-wrap">
                <input
                  v-model="doctorForm.fio"
                  class="field-input"
                  type="text"
                  placeholder="Фамилия Имя Отчество"
                />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Опыт (лет): <span class="required">*</span></span>
              <div class="field-input-wrap">
                <input
                  v-model.number="doctorForm.experience"
                  class="field-input"
                  type="number"
                  placeholder="Например: 10"
                  min="0"
                />
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Специальность: <span class="required">*</span></span>
              <div class="field-input-wrap">
                <select v-model="doctorForm.speciality_id" class="field-input field-select">
                  <option value="">Выберите специальность</option>
                  <option
                    v-for="speciality in specialities"
                    :key="speciality.id"
                    :value="speciality.id"
                  >
                    {{ speciality.name }}
                  </option>
                </select>
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Описание:</span>
              <div class="field-input-wrap">
                <textarea
                  v-model="doctorForm.description"
                  class="field-input field-textarea"
                  placeholder="Образование, курсы повышения квалификации, достижения..."
                  rows="4"
                ></textarea>
              </div>
            </div>

            <div class="field-row">
              <span class="field-label">Фото: <span class="required">*</span></span>
              <div class="field-input-wrap field-file-wrap">
                <input
                  type="file"
                  @change="handleFileUpload"
                  accept="image/*"
                  class="field-file-input"
                  ref="fileInput"
                />
                <div v-if="doctorForm.photoName" class="file-name">
                  📎 {{ doctorForm.photoName }}
                </div>
                <div v-else class="file-placeholder">Выберите файл (jpg, png)</div>
              </div>
            </div>
          </div>

          <div v-if="doctorModalError" class="modal-error">
            {{ doctorModalError }}
          </div>

          <div class="modal__actions">
            <button class="btn-ok" @click="createDoctor" :disabled="isSubmitting">
              {{ isSubmitting ? 'Добавление...' : 'Ок' }}
            </button>
            <button class="btn-cancel" @click="closeDoctorModal">Отмена</button>
          </div>
        </div>
      </div>
    </Transition>

    <!-- Модальное окно добавления специальности -->
    <Transition name="fade">
      <div v-if="isSpecialityModalOpen" class="overlay" @click.self="closeSpecialityModal">
        <div class="modal modal--small">
          <h2 class="modal__title">Новая специальность</h2>

          <div class="modal__fields">
            <div class="field-row">
              <span class="field-label">Название: <span class="required">*</span></span>
              <div class="field-input-wrap">
                <input
                  v-model="specialityForm.name"
                  class="field-input"
                  type="text"
                  placeholder="Например: Стоматолог-хирург"
                />
              </div>
            </div>
          </div>

          <div v-if="specialityModalError" class="modal-error">
            {{ specialityModalError }}
          </div>

          <div class="modal__actions">
            <button class="btn-ok" @click="createSpeciality" :disabled="isSubmittingSpeciality">
              {{ isSubmittingSpeciality ? 'Добавление...' : 'Ок' }}
            </button>
            <button class="btn-cancel" @click="closeSpecialityModal">Отмена</button>
          </div>
        </div>
      </div>
    </Transition>
  </section>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import DoctorsApiService from '@/shared/api/doctorsApiService'

const doctorsApiService = new DoctorsApiService()

// Данные
const doctors = ref([])
const specialities = ref([])
const isLoading = ref(true)
const errorMessage = ref('')

// Фильтры
const searchQuery = ref('')
const selectedSpeciality = ref('')

// Модальное окно для врача
const isDoctorModalOpen = ref(false)
const isSubmitting = ref(false)
const doctorModalError = ref('')
const selectedFile = ref(null)

// Модальное окно для специальности
const isSpecialityModalOpen = ref(false)
const isSubmittingSpeciality = ref(false)
const specialityModalError = ref('')

// Форма для создания врача
const doctorForm = ref({
  fio: '',
  experience: '',
  speciality_id: '',
  description: '',
  photoName: '',
})

// Форма для создания специальности
const specialityForm = ref({
  name: '',
})

// Отфильтрованные врачи
const filteredDoctors = computed(() => {
  let result = doctors.value

  if (searchQuery.value) {
    const query = searchQuery.value.toLowerCase()
    result = result.filter((doctor) => doctor.fio?.toLowerCase().includes(query))
  }

  if (selectedSpeciality.value) {
    result = result.filter((doctor) => doctor.speciality?.name === selectedSpeciality.value)
  }

  return result
})

// Загрузка всех врачей
const loadDoctors = async () => {
  isLoading.value = true
  errorMessage.value = ''

  try {
    const response = await doctorsApiService.getAllDoctors()
    console.log('Doctors response:', response)

    if (response && response.ok !== false) {
      if (response.data && Array.isArray(response.data)) {
        doctors.value = response.data
      } else if (Array.isArray(response)) {
        doctors.value = response
      } else if (response.doctors && Array.isArray(response.doctors)) {
        doctors.value = response.doctors
      } else {
        doctors.value = []
      }
    } else {
      errorMessage.value = response?.error || 'Ошибка загрузки специалистов'
    }
  } catch (error) {
    console.error('Load doctors error:', error)
    errorMessage.value = error.message || 'Ошибка подключения к серверу'
  } finally {
    isLoading.value = false
  }
}

// Загрузка специальностей
const loadSpecialities = async () => {
  try {
    const response = await doctorsApiService.getAllSpecialities()
    console.log('Specialities response:', response)

    // Правильная обработка структуры { specialities: [...] }
    if (response && response.specialities && Array.isArray(response.specialities)) {
      specialities.value = response.specialities
      console.log('Specialities loaded from response.specialities:', specialities.value)
    }
    // Другие возможные варианты
    else if (response && response.data && Array.isArray(response.data)) {
      specialities.value = response.data
      console.log('Specialities loaded from response.data:', specialities.value)
    } else if (Array.isArray(response)) {
      specialities.value = response
      console.log('Specialities loaded from response array:', specialities.value)
    } else {
      specialities.value = []
      console.log('No specialities array found in response')
    }
  } catch (error) {
    console.error('Load specialities error:', error)
  }
}

// Обновление всех данных
const refreshAllData = async () => {
  await Promise.all([loadDoctors(), loadSpecialities()])
}

// Обработка загрузки файла
const handleFileUpload = (event) => {
  const file = event.target.files[0]
  if (file) {
    selectedFile.value = file
    doctorForm.value.photoName = file.name
  }
}

// Валидация формы врача
const validateDoctorForm = () => {
  if (!doctorForm.value.fio.trim()) {
    doctorModalError.value = 'Пожалуйста, укажите ФИО'
    return false
  }

  if (!doctorForm.value.experience && doctorForm.value.experience !== 0) {
    doctorModalError.value = 'Пожалуйста, укажите опыт работы'
    return false
  }

  if (doctorForm.value.experience < 0) {
    doctorModalError.value = 'Опыт работы не может быть отрицательным'
    return false
  }

  if (!doctorForm.value.speciality_id) {
    doctorModalError.value = 'Пожалуйста, выберите специальность'
    return false
  }

  if (!selectedFile.value) {
    doctorModalError.value = 'Пожалуйста, загрузите фото'
    return false
  }

  return true
}

// Создание врача
const createDoctor = async () => {
  doctorModalError.value = ''

  if (!validateDoctorForm()) {
    setTimeout(() => {
      doctorModalError.value = ''
    }, 3000)
    return
  }

  isSubmitting.value = true

  try {
    const formData = new FormData()
    formData.append('fio', doctorForm.value.fio.trim())
    formData.append('experience', doctorForm.value.experience)
    formData.append('speciality_id', doctorForm.value.speciality_id)
    formData.append('description', doctorForm.value.description.trim() || '')
    formData.append('photo', selectedFile.value)

    const response = await doctorsApiService.createDoctor(formData)
    console.log('Create doctor response:', response)

    if (response && response.ok !== false) {
      closeDoctorModal()
      await refreshAllData()
    } else {
      doctorModalError.value = response?.error || 'Ошибка при добавлении специалиста'
      setTimeout(() => {
        doctorModalError.value = ''
      }, 3000)
    }
  } catch (error) {
    console.error('Create doctor error:', error)
    doctorModalError.value = error.message || 'Ошибка подключения к серверу'
    setTimeout(() => {
      doctorModalError.value = ''
    }, 3000)
  } finally {
    isSubmitting.value = false
  }
}

// Валидация формы специальности
const validateSpecialityForm = () => {
  if (!specialityForm.value.name.trim()) {
    specialityModalError.value = 'Пожалуйста, укажите название специальности'
    return false
  }
  return true
}

// Создание специальности
const createSpeciality = async () => {
  specialityModalError.value = ''

  if (!validateSpecialityForm()) {
    setTimeout(() => {
      specialityModalError.value = ''
    }, 3000)
    return
  }

  isSubmittingSpeciality.value = true

  try {
    const response = await doctorsApiService.createSpeciality(specialityForm.value.name.trim())
    console.log('Create speciality response:', response)

    if (response && response.ok !== false) {
      closeSpecialityModal()
      await loadSpecialities() // Перезагружаем специальности
      console.log('Specialities after reload:', specialities.value)
    } else {
      specialityModalError.value = response?.error || 'Ошибка при добавлении специальности'
      setTimeout(() => {
        specialityModalError.value = ''
      }, 3000)
    }
  } catch (error) {
    console.error('Create speciality error:', error)
    specialityModalError.value = error.message || 'Ошибка подключения к серверу'
    setTimeout(() => {
      specialityModalError.value = ''
    }, 3000)
  } finally {
    isSubmittingSpeciality.value = false
  }
}

// Открыть модалку добавления врача
const openAddDoctorModal = () => {
  doctorForm.value = {
    fio: '',
    experience: '',
    speciality_id: '',
    description: '',
    photoName: '',
  }
  selectedFile.value = null
  doctorModalError.value = ''
  isDoctorModalOpen.value = true
}

// Закрыть модалку врача
const closeDoctorModal = () => {
  isDoctorModalOpen.value = false
  doctorForm.value = {
    fio: '',
    experience: '',
    speciality_id: '',
    description: '',
    photoName: '',
  }
  selectedFile.value = null
  doctorModalError.value = ''
}

// Открыть модалку добавления специальности
const openAddSpecialityModal = () => {
  specialityForm.value = {
    name: '',
  }
  specialityModalError.value = ''
  isSpecialityModalOpen.value = true
}

// Закрыть модалку специальности
const closeSpecialityModal = () => {
  isSpecialityModalOpen.value = false
  specialityForm.value = {
    name: '',
  }
  specialityModalError.value = ''
}

// Открыть модалку редактирования врача
const openEditDoctorModal = (doctor) => {
  console.log('Edit doctor:', doctor)
}

// Загрузка при монтировании
onMounted(() => {
  refreshAllData()
})
</script>

<style scoped>
/* Стили остаются без изменений - те же самые, что были ранее */
.content-wrapper {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 16px;
  min-width: 0;
  position: relative;
}

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

.btn-action:hover {
  background: #e8f0fb;
}

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

.filter__input:focus {
  border-color: #1a3a6b;
}

.filter__select {
  cursor: pointer;
}

.error-message {
  background: #fee;
  border-left: 4px solid #f00;
  padding: 12px 16px;
  border-radius: 8px;
  color: #c00;
  font-size: 14px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.close-btn {
  background: none;
  border: none;
  font-size: 20px;
  cursor: pointer;
  color: #c00;
  padding: 0 4px;
}

.close-btn:hover {
  color: #f00;
}

.loader {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 60px;
}

.spinner {
  width: 40px;
  height: 40px;
  border: 4px solid #e0e0e0;
  border-top-color: #1a3a6b;
  border-radius: 50%;
  animation: spin 0.8s linear infinite;
}

@keyframes spin {
  to {
    transform: rotate(360deg);
  }
}

.table-wrap {
  border: 1.5px solid #000;
  border-radius: 16px;
  padding: 0 12px;
  background: #fff;
  overflow-x: auto;
}

.grid-table {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  min-width: 600px;
}

.cell {
  display: flex;
  align-items: center;
  padding: 12px 10px;
  font-size: 14px;
  color: #333;
  min-width: 0;
  word-break: break-word;
}

.cell--head {
  font-weight: 600;
  color: #444;
  padding-top: 16px;
  padding-bottom: 12px;
}

.cell--name {
  font-weight: 500;
}

.grid-row {
  display: contents;
}

.grid-row--header .cell {
  background: #fff;
}

.grid-row:hover .cell {
  background: #f8faff;
}

.empty-state {
  grid-column: 1 / -1;
  text-align: center;
  padding: 48px;
  color: #999;
  font-size: 14px;
}

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

.btn-edit:hover {
  background: #a8c8ed;
}

.overlay {
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
}

.modal {
  background: #c8ddf5;
  border-radius: 16px;
  padding: 32px 36px;
  width: 550px;
  max-width: 90vw;
  max-height: 90vh;
  overflow-y: auto;
}

.modal--small {
  width: 400px;
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
  margin-bottom: 20px;
}

.field-row {
  display: flex;
  align-items: flex-start;
  gap: 12px;
}

.field-label {
  font-size: 14px;
  color: #222;
  width: 100px;
  flex-shrink: 0;
  padding-top: 8px;
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

.field-select {
  cursor: pointer;
}

.field-textarea {
  resize: vertical;
  font-family: 'Inter', sans-serif;
}

.field-file-wrap {
  flex-direction: column;
  align-items: flex-start;
  padding: 10px 12px;
}

.field-file-input {
  width: 100%;
  cursor: pointer;
}

.file-name {
  font-size: 13px;
  color: #1a3a6b;
  margin-top: 5px;
}

.file-placeholder {
  font-size: 13px;
  color: #999;
  margin-top: 5px;
}

.required {
  color: #f00;
}

.modal-error {
  background: #fee;
  padding: 10px 12px;
  border-radius: 6px;
  color: #c00;
  font-size: 13px;
  margin-bottom: 20px;
}

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

.btn-ok:hover:not(:disabled) {
  background: #24508f;
}

.btn-ok:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

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

.btn-cancel:hover:not(:disabled) {
  background: #f0f4fa;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.2s;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .top-panel {
    flex-direction: column;
  }

  .top-panel__actions {
    flex-direction: row;
    flex-wrap: wrap;
  }

  .btn-action {
    min-width: auto;
  }

  .filter__field {
    flex-direction: column;
    align-items: flex-start;
  }

  .filter__field-label {
    width: auto;
  }

  .field-row {
    flex-direction: column;
    align-items: flex-start;
    gap: 6px;
  }

  .field-label {
    width: auto;
    padding-top: 0;
  }

  .modal {
    padding: 24px 20px;
  }
}
</style>
