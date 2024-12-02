<template>
  <div class="app">
    <Navbar />
    <main class="p-4">
      <router-view />
    </main>
  </div>
</template>

<script setup>
import Navbar from './components/Navbar.vue';
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
}
</style>
