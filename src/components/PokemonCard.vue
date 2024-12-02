<template>
    <div class="pokemon-card border p-6 mt-10 rounded shadow hover:shadow-md transition relative">
      <!-- Iconos de tipo en la esquina superior izquierda -->
      <div class="absolute -top-4 left-4 flex space-x-2">
        <div
          v-for="type in pokemon.types"
          :key="type"
          class="w-10 h-10 rounded-full flex items-center justify-center text-white text-xl shadow-lg"
          :style="{ backgroundColor: typeColors[type] || '#666' }"
        >
          {{ typeIcons[type] || '?' }}
        </div>
      </div>
  
      <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${pokemon.id}.png`" :alt="pokemon.name" class="mx-auto w-24 h-24" />
      <h3 class="text-lg font-bold text-center mt-2 capitalize">{{ pokemon.name }}</h3>
  
      <!-- Reproducir sonido -->
      <button
        @click="playCry(pokemon)"
        class="mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full"
      >
        🔊 Reproducir Sonido
      </button>
  
      <!-- Resumen de stats -->
      <div class="mt-4 grid grid-cols-3 gap-2">
        <div
          v-for="stat in pokemon.stats"
          :key="stat.stat.name"
          class="text-center"
        >
          <div class="bg-gray-200 rounded-full h-2 relative">
            <div
              class="absolute top-0 left-0 h-2 bg-blue-500 rounded-full"
              :style="{ width: `${(stat.base_stat / 255) * 100}%` }"
            ></div>
          </div>
          <span class="text-xs text-gray-600 capitalize">{{ stat.stat.name }}</span>
        </div>
      </div>
  
      <!-- Botones -->
      <button
        @click="onViewDetail(pokemon)"
        class="mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 w-full"
      >
        Detalle
      </button>
      <button
        v-if="!disableAdd"
        @click="onAddToTeam(pokemon)"
        class="mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full"
      >
        Agregar al equipo
      </button>
      <button
        v-if="fromView"
        @click="onRemoveFromTeam(pokemon)"
        class="mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full"
      >
        Borrar de Equipo
      </button>
      <slot></slot>
    </div>
  </template>
  
  <script setup lang="ts">
  import { defineProps } from 'vue';
  
  // Props
  defineProps({
    pokemon: {
      type: Object as () => {
        id: number;
        name: string;
        image: string;
        types: string[];
        stats: { stat: { name: string }; base_stat: number }[];
      },
      required: true,
    },
    fromView: {
      type: Boolean,
      default: true,
    },
    disableAdd: {
      type: Boolean,
      default: false,
    },
    onAddToTeam: {
      type: Function,
      required: true,
    },
    onRemoveFromTeam: {
      type: Function,
      required: true,
    },
    onViewDetail: {
      type: Function,
      required: true,
    },
  });
  
  // Iconos de tipo
  const typeIcons: Record<string, string> = {
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
  
  // Colores de fondo de tipo
  const typeColors: Record<string, string> = {
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
  
  // Reproducir el sonido del Pokémon
  const playCry = (pokemon: { name: string }) => {
    const audio = new Audio(`https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`);
    audio.play();
  };
  </script>
  
  <style scoped>
  .pokemon-card {
    position: relative;
  }
  
  .pokemon-card .absolute {
    z-index: 10;
  }
  
  .pokemon-card img {
    position: relative;
    z-index: 1;
  }
  
  .pokemon-card .bg-gray-200 {
    background-color: #e5e7eb; /* Tailwind Gray 200 */
  }
  
  .pokemon-card .bg-blue-500 {
    background-color: #3b82f6; /* Tailwind Blue 500 */
  }
  </style>
  