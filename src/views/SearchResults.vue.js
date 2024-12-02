import { ref, onMounted, watch, computed } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import PokemonCard from '../components/PokemonCard.vue';
import { useTeamStore } from '../store/teamStore';
import { usePokemonApi } from '../composables/usePokemonApi';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    }
    catch (error) {
        console.error('Error fetching Pokémon:', error);
    }
};
// Navegar al detalle de un Pokémon
const goToDetail = (pokemon) => {
    console.log(pokemon.id);
    router.push(`/pokemon/${pokemon.id}`);
};
// Remover Pokémon del equipo
const removeFromTeam = (pokemonId) => {
    teamStore.removePokemon(pokemonId.id);
};
const isInTeam = (id) => {
    console.log(id);
    console.log('existe en team?', team.value.some((p) => p.id === id));
    return team.value.some((p) => p.id === id);
};
// Actualiza los resultados al cambiar la ruta
watch(() => route.params.query, () => {
    fetchPokemon();
});
// Agregar Pokémon al equipo
const addToTeam = (pokemon) => {
    teamStore.addPokemon(pokemon);
    console.log('Equipo actual:', teamStore.team); // Depuración
};
// Carga inicial
onMounted(() => {
    fetchPokemon();
});
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({});
;
let __VLS_functionalComponentProps;
function __VLS_template() {
    const __VLS_ctx = {};
    const __VLS_localComponents = {
        ...{},
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_components;
    const __VLS_localDirectives = {
        ...{},
        ...__VLS_ctx,
    };
    let __VLS_directives;
    let __VLS_styleScopedClasses;
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-7xl mx-auto ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    if (__VLS_ctx.filteredPokemons.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500") }, });
        (__VLS_ctx.$route.params.query);
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-5 gap-4") }, });
        for (const [pokemon] of __VLS_getVForSourceType((__VLS_ctx.filteredPokemons))) {
            // @ts-ignore
            [PokemonCard,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(PokemonCard, new PokemonCard({ key: ((pokemon.id)), pokemon: ((pokemon)), onAddToTeam: ((__VLS_ctx.addToTeam)), onViewDetail: ((__VLS_ctx.goToDetail)), onRemoveFromTeam: ((__VLS_ctx.removeFromTeam)), fromView: ((__VLS_ctx.isInTeam(pokemon.id))), disableAdd: ((__VLS_ctx.team.length >= 6 || __VLS_ctx.isInTeam(pokemon.id))), }));
            const __VLS_1 = __VLS_0({ key: ((pokemon.id)), pokemon: ((pokemon)), onAddToTeam: ((__VLS_ctx.addToTeam)), onViewDetail: ((__VLS_ctx.goToDetail)), onRemoveFromTeam: ((__VLS_ctx.removeFromTeam)), fromView: ((__VLS_ctx.isInTeam(pokemon.id))), disableAdd: ((__VLS_ctx.team.length >= 6 || __VLS_ctx.isInTeam(pokemon.id))), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
        }
    }
    __VLS_styleScopedClasses['xs:mt-6'];
    __VLS_styleScopedClasses['mt-[80px]'];
    __VLS_styleScopedClasses['md:mt-[80px]'];
    __VLS_styleScopedClasses['lg:mt-[60px]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mb-4'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['sm:grid-cols-1'];
    __VLS_styleScopedClasses['lg:grid-cols-5'];
    __VLS_styleScopedClasses['gap-4'];
    var __VLS_slots;
    var __VLS_inheritedAttrs;
    const __VLS_refs = {};
    var $refs;
    var $el;
    return {
        attrs: {},
        slots: __VLS_slots,
        refs: $refs,
        rootEl: $el,
    };
}
;
const __VLS_self = (await import('vue')).defineComponent({
    setup() {
        return {
            PokemonCard: PokemonCard,
            team: team,
            filteredPokemons: filteredPokemons,
            goToDetail: goToDetail,
            removeFromTeam: removeFromTeam,
            isInTeam: isInTeam,
            addToTeam: addToTeam,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
