<template>
    <div class="xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-4xl mx-auto ">
      <div v-if="error" class="text-red-500">
        <p>{{ error }}</p>
        <router-link to="/" class="text-blue-500">Go back to Home</router-link>
      </div>
  
      <div v-else-if="pokemonDetails" class="lg:flex lg:gap-8">
        <!-- Evolución en pantallas grandes -->
        <aside
          class="hidden lg:flex flex-col gap-4 pr-4"
          style="max-width: 200px;"
        >
          <img
            v-for="evolution in evolutionChain"
            :key="evolution.id"
            :src="evolution.image"
            :alt="evolution.name"
            @click="goToPokemon(evolution.id)"
            class="cursor-pointer hover:opacity-75 w-16 h-16 mx-auto"
            title="View {{ evolution.name }}"
          />
          <button
            @click="router.back"
            class="block mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700"
        >
            Volver
        </button>
        </aside>
  
        <!-- Contenido Principal -->
        <div class="flex-1">
            <!-- Evolución en pantallas pequeñas -->
            <h3 class="text-lg font-bold mt-2 lg:hidden">Cadena Evolutiva:</h3>
          <div
            v-if="evolutionChain.length && !error"
            class="flex flex-wrap gap-4 mt-4 lg:hidden"
          >
            <img
              v-for="evolution in evolutionChain"
              :key="evolution.id"
              :src="evolution.image"
              :alt="evolution.name"
              @click="goToPokemon(evolution.id)"
              class="cursor-pointer hover:opacity-75 w-16 h-16"
              title="View {{ evolution.name }}"
            />
            <button @click="router.back" class="flex flex-row-reverse space-x-4 space-x-reverse block mt-4 mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 lg:hidden">
                Volver
            </button>
          </div>
          
          <PokemonDetailCard :pokemon="pokemonDetails" />
        </div>
      </div>
  
      <div v-else>
        <p>Cargando el detalle del pokemon...</p>
      </div>
    </div>
  </template>
  
  
  <script setup lang="ts">
import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePokemonApi } from '../composables/usePokemonApi';
import PokemonDetailCard from '../components/PokemonDetailCard.vue';

const { fetchPokemonDetails, fetchEvolutionChain } = usePokemonApi();
const route = useRoute();
const router = useRouter();

const pokemonDetails = ref<any>(null);
const evolutionChain = ref<any[]>([]);
const error = ref<string | null>(null);

const loadPokemonDetails = async () => {
  try {
    const id = route.params.id as string;
    const details = await fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);
    pokemonDetails.value = {
      id: details.id,
      name: details.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`,
      types: details.types.map((t: any) => t.type.name),
      stats: details.stats.map((s: any) => ({
        name: s.stat.name,
        base: s.base_stat,
      })),
      height: details.height,
      weight: details.weight,
    };

    const speciesData = await fetchPokemonDetails(details.species.url);
    if (speciesData.evolution_chain) {
      // Extrae y convierte el ID de la cadena evolutiva a un número
      const evolutionChainId = parseInt(
        speciesData.evolution_chain.url.split('/evolution-chain/')[1].split('/')[0],
        10
      );
      const evolutionData = await fetchEvolutionChain(evolutionChainId); // Pasa como número
      parseEvolutionChain(evolutionData.chain);
    }
  } catch (e) {
    error.value = 'Failed to load Pokémon details. Please try again later.';
    console.error(e);
  }
};


const parseEvolutionChain = (chain: any) => {
  const evolutions = [];
  let current = chain;
  while (current) {
    evolutions.push({
      id: current.species.url.split('/').reverse()[1],
      name: current.species.name,
      image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${current.species.url
        .split('/')
        .reverse()[1]}.png`,
      types: [],
      stats: [],
      height: null,
      weight: null,
    });
    current = current.evolves_to[0];
  }
  evolutionChain.value = evolutions;
};

onMounted(() => loadPokemonDetails());

// Escucha cambios en el parámetro `id` y recarga los detalles
watch(
  () => route.params.id,
  () => {
    loadPokemonDetails();
  }
);

const goToPokemon = (id: string) => {
  router.push(`/pokemon/${id}`);
};
</script>

  