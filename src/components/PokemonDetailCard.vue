<template>
  <div class="text-md pokemon-detail-card bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition flex flex-col sm:flex-row">
    <!-- Columna izquierda -->
    <div class="flex-1 flex flex-col items-center lg:items-center lg:pr-4">
      <!-- Nombre del Pokémon -->
      <h3 class="text-2xl font-bold text-center lg:text-center capitalize">{{ pokemon.name }}</h3>
      <!-- Tipos -->
      <div class="flex justify-center space-x-4 mt-2">
        <span
          v-for="type in pokemon.types"
          :key="type"
          class="flex items-center justify-center w-12 h-12 rounded-full text-white text-xl shadow-lg"
          :style="{ backgroundColor: typeColors[type] || '#666' }"
        >
          {{ typeIcons[type] || '?' }}
        </span>
        <button
          @click="playCry(pokemon)"
          class="lg:hidden text-black bg-yellow-300 w-10 shadow-lg hover:shadow-lg"
        >
          🔊 
        </button>
      </div>
      <!-- Imagen -->
      <img :src="pokemon.image" :alt="pokemon.name" class="w-60 h-60 mt-4" />
      <!-- Botón de sonido -->
      <button
        @click="playCry(pokemon)"
        class="hidden lg:block mt-4 bg-yellow-300 text-gray px-4 py-2 rounded hover:bg-yellow-600 w-full lg:w-auto"
      >
        🔊 Reproducir Sonido
      </button>
    </div>

    <!-- Columna derecha -->
    <div class="flex-1">
      <!-- Estadísticas -->
      <h4 class="text-lg font-bold mt-8 lg:mt-0 text-center lg:text-left">Stats:</h4>
      <ul class="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 text-center">
        <li
          v-for="stat in pokemon.stats"
          :key="stat.name"
          class="border rounded-lg p-4 relative"
        >
          <span class="block text-gray-600 font-bold capitalize">{{ stat.name }}</span>
          <span class="block text-blue-500 font-semibold text-xl mb-2">{{ stat.base_stat }}</span>
          <!-- Barra de progreso -->
          <div class="progress-bar-container bg-gray-200 rounded-full h-4">
            <div
              class="progress-bar bg-blue-500 h-4 rounded-full"
              :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
            ></div>
          </div>
        </li>
      </ul>
      <!-- Detalles adicionales -->
      <div class="mt-8">
        <p><strong>Height:</strong> {{ pokemon.height }} dm</p>
        <p><strong>Weight:</strong> {{ pokemon.weight }} hg</p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue';

// Define los tipos permitidos para los tipos de Pokémon
type PokemonType =
  | 'grass'
  | 'poison'
  | 'fire'
  | 'water'
  | 'bug'
  | 'normal'
  | 'electric'
  | 'ground'
  | 'rock'
  | 'psychic'
  | 'ice'
  | 'dragon'
  | 'dark'
  | 'fairy'
  | 'fighting'
  | 'flying'
  | 'ghost'
  | 'steel';

// Define las props
defineProps({
  pokemon: {
    type: Object as () => {
      id: number;
      name: string;
      image: string;
      types: PokemonType[]; // Asegura que los tipos coinciden con las claves de typeIcons
      stats: { name: string; base_stat: number }[];
      height: number;
      weight: number;
    },
    required: true,
  },
});

// Iconos de tipos
const typeIcons: Record<PokemonType, string> = {
  grass: '🌱',
  poison: '☠️',
  fire: '🔥',
  water: '💧',
  bug: '🐛',
  normal: '⚪',
  electric: '⚡',
  ground: '🌍',
  rock: '🪨',
  psychic: '🔮',
  ice: '❄️',
  dragon: '🐉',
  dark: '🌑',
  fairy: '✨',
  fighting: '🥊',
  flying: '🕊️',
  ghost: '👻',
  steel: '⚙️',
};

// Colores de tipos
const typeColors: Record<PokemonType, string> = {
  grass: '#DFF8DC',
  poison: '#E9D5E9',
  fire: '#FDDCCB',
  water: '#D3E8FC',
  bug: '#EAF4D4',
  normal: '#F0F0E4',
  electric: '#FEF6D1',
  ground: '#F7ECD1',
  rock: '#F2E8D6',
  psychic: '#FDDDE5',
  ice: '#E5F7F7',
  dragon: '#E3DAFB',
  dark: '#D9D4CB',
  fairy: '#FCEAF0',
  fighting: '#F8D6D6',
  flying: '#E8E3FB',
  ghost: '#E3DFEF',
  steel: '#F0F0F7',
};

// Función para reproducir el sonido del Pokémon
const playCry = (pokemon: { name: string }) => {
  const audio = new Audio(
    `https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`
  );
  audio.play();
};
</script>

<style scoped>
.progress-bar-container {
  width: 100%;
  height: 1rem;
  background-color: #e5e7eb;
}

.progress-bar {
  height: 1rem;
  background-color: #3b82f6;
  transition: width 0.3s ease;
}
</style>
