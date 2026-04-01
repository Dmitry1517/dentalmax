<template>
    <section class="content-wrapper">
        <div class="content">
            <p class="content__label">Лицензия и документы организации:</p>

            <div class="upload-area">
                <div class="upload-box">
                <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M24 8V34" stroke="#1a3a6b" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M12 26L24 38L36 26" stroke="#1a3a6b" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>
                    <path d="M10 42H38" stroke="#1a3a6b" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
                </div>

                <button class="upload-add" aria-label="Добавить документ">
                <svg width="36" height="36" viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M18 6V30" stroke="#1a3a6b" stroke-width="2.5" stroke-linecap="round"/>
                    <path d="M6 18H30" stroke="#1a3a6b" stroke-width="2.5" stroke-linecap="round"/>
                </svg>
                </button>
            </div>
        </div>
    </section>
</template>

<style scoped>
.content-wrapper {
    flex: 1;
    border: 1.5px solid #000;
    border-radius: 16px;
    padding: 20px;
    background: #fff;
  }
  
  /* ── CONTENT (голубой фон) ── */
  .content {
    background: #ddeaf8;
    border-radius: 10px;
    padding: 24px 28px;
    min-height: 180px;
  }
  
  .content__label {
    font-size: 15px;
    color: #222;
    margin-bottom: 20px;
    font-weight: 600;
  }
  
  /* ── UPLOAD AREA ── */
  .upload-area {
    display: flex;
    align-items: center;
    gap: 20px;
  }
  
  .upload-box {
    width: 200px;
    height: 200px;
    background: lightgray;
    border-radius: 8px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: background 0.2s;
  }
  
  .upload-box:hover {
    background: #b8cce0;
  }
  
  .upload-add {
    width: 68px;
    height: 68px;
    background: #ddeaf8;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: background 0.2s;
    flex-shrink: 0;
  }
  
  .upload-add:hover {
    background: #b8cce0;
  }
</style>