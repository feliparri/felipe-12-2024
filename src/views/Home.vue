<template>
    <div class="xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-7xl mx-auto ">
      <!-- Grid de Pokémon -->
      <div class="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4">
        <PokemonCard
          v-for="pokemon in pokemonList"
          :key="pokemon.id"
          :pokemon="pokemon"
          :onAddToTeam="addToTeam"
          :onRemoveFromTeam="removeFromTeam"
          :onViewDetail="goToDetail"
          :fromView="isInTeam(pokemon.id)"
          :disableAdd="team.length >= 6 || isInTeam(pokemon.id)"
        />
      </div>
      <!-- Botón para cargar más Pokémon -->
      <div class="mt-4 text-center">
        <button
          @click="loadMorePokemons"
          class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
          Cargar más
        </button>
      </div>
    </div>
</template>
  
  
<script setup>
import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTeamStore } from '../store/teamStore'; // Importa el store
import PokemonCard from '../components/PokemonCard.vue';
import { usePokemonApi } from '../composables/usePokemonApi';

const router = useRouter();
const teamStore = useTeamStore();
const team = computed(() => teamStore.team); // Computed para acceder al equipo

const pokemonList = ref([]);
const offset = ref(0);
const limit = 25;

const { fetchPokemonList, fetchPokemonDetails } = usePokemonApi();

// Cargar Pokémon desde la API
const loadPokemons = async () => {
  const results = await fetchPokemonList(limit, offset.value);
  const details = await Promise.all(
    results.map(async (pokemon) => {
      const data = await fetchPokemonDetails(pokemon.url);
      console.log(data)
      return {
        id: data.id,
        name: data.name,
        image: data.sprites.front_default,
        types: data.types.map((type) => type.type.name),
        stats: data.stats
      };
    })
  );
  console.log(details)
  pokemonList.value.push(...details);
};

// Cargar más Pokémon
const loadMorePokemons = () => {
  offset.value += limit;
  loadPokemons();
};

// Navegar al detalle de un Pokémon
const goToDetail = (pokemon) => {
    console.log(pokemon.id)
  router.push(`/pokemon/${pokemon.id}`);
};

// Agregar Pokémon al equipo
const addToTeam = (pokemon) => {
  if (team.value.length < 6 && !isInTeam(pokemon.id)) {
    teamStore.addPokemon(pokemon);
    console.log('Equipo actual:', teamStore.team);
  }
};
// Remover Pokémon del equipo
const removeFromTeam = (pokemonId) => {
    teamStore.removePokemon(pokemonId.id);
    console.log('Removed Pokémon from team:', pokemonId);
  };

// Verificar si un Pokémon ya está en el equipo
const isInTeam = (id) => {
  return team.value.some((p) => p.id === id);
};

// Cargar Pokémon al montar
onMounted(() => {
  loadPokemons();
});
</script>
