<template>
  <div>
    <NuxtLayout>
      <NuxtLoadingIndicator />
      <NuxtRouteAnnouncer />
      <div class="rm-wrapper bg-black text-white">
        <Navbar @toggleMenu="toggleMenu" />
      </div>
      <transition name="page" mode="out-in">
        <NuxtPage />
      </transition>
    </NuxtLayout>
  </div>
</template>

<script setup>
const config = useAppConfig();
useSeoMeta({
  title: config.title,
});
</script>

<style>
.page-enter-active,
.page-leave-active {
  transition: opacity 0.4s ease;
}

.page-enter-from,
.page-leave-to {
  opacity: 0;
}

.page-enter-to,
.page-leave-from {
  opacity: 1;
}
</style>
