<template>
  <nav class="mb-10 bg-blue-500 text-white px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between fixed top-0 left-0 w-full z-50 shadow-md">
    <!-- Sección izquierda: Opciones del menú -->
    <div class="flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4">
      <ul class="flex flex-wrap space-x-4 mt-2 lg:mt-0">
        <li>
          <img
            src="../../public/pokeball.png"
            alt="Pokeball Logo"
            class="w-8 h-8"
          />
        </li>
        <li>
          <h1 class="text-lg font-bold">Pokedex</h1>
        </li>
        <li>
          <router-link to="/" class="hover:underline mt-4">Home</router-link>
        </li>
        <li>
          <router-link to="/team" class="hover:underline mt-4">
            Team
            <!-- Contador del equipo -->
            <span
              v-if="teamCount > 0"
              class="bg-red-500 text-white text-xs font-bold rounded-full p-2 ml-1"
            >
              {{ teamCount }}
            </span>
          </router-link>
        </li>
        <li>
          <button
            @click="toggleSearch"
            class="flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700 lg:hidden"
          >
            <!-- Ícono plano de lupa -->
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              class="w-5 h-5 text-white"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M15.75 15.75L19.5 19.5M10.5 4.5a6 6 0 100 12 6 6 0 000-12z"
              />
            </svg>
          </button>
        </li>
      </ul>
    </div>

    <!-- Sección derecha: Ícono de búsqueda -->
    <div class="flex items-center lg:space-x-4 mt-4 lg:mt-0">
      <form
        v-show="isSearchVisible || isLargeScreen"
        @submit.prevent="searchPokemon"
        :class="{
          'fixed top-16 left-4 right-4 z-50 bg-white p-4 shadow-lg rounded-lg': !isLargeScreen,
          'flex items-center space-x-2 w-full lg:w-auto': isLargeScreen
        }"
        class="lg:flex"
      >
        <input
          v-model="searchQuery"
          type="text"
          placeholder="Search Pokémon"
          class="px-4 py-2 w-full lg:w-auto rounded-l-md border-none focus:ring-2 focus:ring-blue-300 text-black"
        />
        <button
          type="submit"
          class="px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700"
        >
          Search
        </button>
      </form>
    </div>
  </nav>
</template>

<script setup>
import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTeamStore } from '../store/teamStore';

// Estado del buscador
const searchQuery = ref('');
const isSearchVisible = ref(false);

// Determina si la pantalla es grande (lg)
const isLargeScreen = ref(window.innerWidth >= 1024);

const updateScreenSize = () => {
  isLargeScreen.value = window.innerWidth >= 1024;
};

// Actualiza el tamaño al redimensionar
window.addEventListener('resize', updateScreenSize);

// Router para redirigir al usuario
const router = useRouter();

// Estado global del equipo
const teamStore = useTeamStore();
const teamCount = computed(() => teamStore.team.length); // Calcula el número de Pokémon en el equipo

const searchPokemon = () => {
  if (searchQuery.value.trim() !== '') {
    router.push(`/search/${searchQuery.value.trim().toLowerCase()}`);
    searchQuery.value = ''; // Limpia el campo de búsqueda
    isSearchVisible.value = false; // Oculta el buscador en pantallas pequeñas
  }
};

const toggleSearch = () => {
  isSearchVisible.value = !isSearchVisible.value;
};

// Limpia el listener al destruir el componente
watch(isSearchVisible, (visible) => {
  if (!visible && !isLargeScreen.value) searchQuery.value = '';
});

window.addEventListener('beforeunload', () => {
  window.removeEventListener('resize', updateScreenSize);
});
</script>

<style>
/* Mejora del diseño en pantallas pequeñas */
nav ul {
  list-style: none;
  padding: 0;
}

nav ul li {
  margin: 0;
}

nav input {
  min-width: 150px;
}
</style>
