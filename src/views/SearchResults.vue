<template>
    <div class="xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-7xl mx-auto ">
      <h1 class="text-2xl font-bold mb-4">Search Results</h1>
      <!-- Mostrar mensaje si no hay resultados -->
      <div v-if="filteredPokemons.length === 0">
        <p class="text-red-500">No se encontró pokemon para "{{ $route.params.query }}"</p>
      </div>
      <!-- Mostrar resultados si hay Pokémon -->
      <div v-else class="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4">
        <PokemonCard
          v-for="pokemon in filteredPokemons"
          :key="pokemon.id"
          :pokemon="pokemon"
          :onAddToTeam="addToTeam"
          :onViewDetail="goToDetail"
          :onRemoveFromTeam="removeFromTeam"
          :fromView="isInTeam(pokemon.id)"
          :disableAdd="team.length >= 6 || isInTeam(pokemon.id)"
        />
      </div>
    </div>
  </template>
  
  <script setup>
  import { ref, onMounted, watch, computed } from 'vue';
  import { useRoute, useRouter } from 'vue-router';
  import PokemonCard from '../components/PokemonCard.vue';
  import { useTeamStore } from '../store/teamStore';
  import { usePokemonApi } from '../composables/usePokemonApi';
  
  const route = useRoute();
  const router = useRouter();
  const teamStore = useTeamStore();
  const team = computed(() => teamStore.team); // Computed para acceder al equipo
  const { fetchPokemonDetails } = usePokemonApi();
  
  const filteredPokemons = ref([]);
  
  // Carga Pokémon basado en la búsqueda
  const fetchPokemon = async () => {
    const query = route.params.query.toLowerCase();
    filteredPokemons.value = [];
    try {
      const data = await fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${query}`);
      filteredPokemons.value = [
        {
          id: data.id,
          name: data.name,
          image: data.sprites.front_default,
          types: data.types.map((type) => type.type.name),
          stats: data.stats
        },
      ];
    } catch (error) {
      console.error('Error fetching Pokémon:', error);
    }
  };
  // Navegar al detalle de un Pokémon
const goToDetail = (pokemon) => {
    console.log(pokemon.id)
  router.push(`/pokemon/${pokemon.id}`);
};

// Remover Pokémon del equipo
const removeFromTeam = (pokemonId) => {
    teamStore.removePokemon(pokemonId.id);
  };

  const isInTeam = (id) => {
    console.log(id)
    console.log('existe en team?', team.value.some((p) => p.id === id))
    return team.value.some((p) => p.id === id);
    };
  
  // Actualiza los resultados al cambiar la ruta
  watch(
    () => route.params.query,
    () => {
      fetchPokemon();
    }
  );
  
  // Agregar Pokémon al equipo
  const addToTeam = (pokemon) => {
    teamStore.addPokemon(pokemon);
    console.log('Equipo actual:', teamStore.team); // Depuración
  };
  
  // Carga inicial
  onMounted(() => {
    fetchPokemon();
  });
  </script>
  