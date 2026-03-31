<script setup>
import LogoName from '@/shared/components/LogoName.vue';
</script>

<template>
    <header class="header">
        <div class="header__inner">
            <RouterLink to="/administrator/dashboard" style="text-decoration: none"><LogoName color="#092147" /></RouterLink>
            <nav class="nav">
            <RouterLink to="/administrator/dashboard/admins" class="nav__link">Администраторы</RouterLink>
            <RouterLink to="/administrator/dashboard/bids" class="nav__link">Заявки</RouterLink>
            <RouterLink to="/administrator/dashboard/profile" class="nav__link">Профиль</RouterLink>
            </nav>
        </div>
    </header>
    <RouterView />
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

</style>