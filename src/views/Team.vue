<template>
    <div class="xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-7xl mx-auto ">
      <h1 class="text-2xl font-bold mb-4">Your Team</h1>
      <!-- Mostrar mensaje si el equipo está vacío -->
      <div v-if="team.length === 0" class="text-gray-500">
        <p>Tu equipo está vacío, agrega algunos pokemon's!</p>
      </div>
  
      <!-- Mostrar los Pokémon del equipo -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <PokemonCard
          v-for="pokemon in team"
          :key="pokemon.id"
          :pokemon="pokemon"
          :onRemoveFromTeam="removeFromTeam"
          :onViewDetail="goToDetail"
          disableAdd
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { computed } from 'vue';
  import { useTeamStore } from '../store/teamStore';
  import PokemonCard from '../components/PokemonCard.vue';
  import { useRouter } from 'vue-router';

// Obtener router
  const router = useRouter();
  
  // Obtener el store del equipo
  const teamStore = useTeamStore();
  
  // Computed para obtener los Pokémon del equipo
  const team = computed(() => teamStore.team);
  
  // Función para eliminar Pokémon del equipo
  const removeFromTeam = (pokemonId) => {
    teamStore.removePokemon(pokemonId.id);
    console.log('Removed Pokémon from team:', pokemonId);
  };

  const goToDetail = (pokemon) => {
    console.log(router)
    router.push(`/team/${pokemon.id}`);
    };
  </script>
  
  <style>
  /* Estilos adicionales si son necesarios */
  </style>
  