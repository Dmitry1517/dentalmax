<template>
    <main class="main">
      <div class="layout">
  
        <!-- Левая панель -->
        <aside class="sidebar">
          <h3 class="sidebar__title">Структура сайта:</h3>
          <nav class="sidebar__nav">
            <RouterLink to="/administrator/dashboard" class="sidebar__link sidebar__link--active">Клиника</RouterLink>
            <RouterLink to="/administrator/dashboard/services" class="sidebar__link">Услуги</RouterLink>
            <RouterLink to="/administrator/dashboard/spec" class="sidebar__link">Специалисты</RouterLink>
          </nav>
        </aside>
  
        <RouterView />
  
      </div>
    </main>
  </template>
  
  <style scoped>
  .main {
    max-width: 1280px;
    margin: 0 auto;
    padding: 36px 24px;
  }
  
  .layout {
    display: flex;
    gap: 24px;
    align-items: flex-start;
  }
  
  /* ── SIDEBAR ── */
  .sidebar {
    background: #1a3a6b;
    border-radius: 20px;
    padding: 24px 0;
    min-width: 220px;
    flex-shrink: 0;
  }
  
  .sidebar__title {
    font-size: 15px;
    font-weight: 600;
    color: #fff;
    margin-bottom: 16px;
    padding: 0 20px;
  }
  
  .sidebar__nav {
    display: flex;
    flex-direction: column;
  }
  
  .sidebar__link {
    display: block;
    padding: 10px 20px;
    font-size: 14px;
    font-weight: 500;
    color: rgba(255, 255, 255, 0.75);
    text-decoration: none;
    transition: background 0.2s, color 0.2s;
  }
  
  .sidebar__link:hover {
    background: rgba(255, 255, 255, 0.1);
    color: #fff;
  }

  .sidebar__link.router-link-exact-active {
    background: rgba(255, 255, 255, 0.15);
    color: #fff;
  }
  
  </style>