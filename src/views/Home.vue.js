import { ref, computed, onMounted } from 'vue';
import { useRouter } from 'vue-router';
import { useTeamStore } from '../store/teamStore'; // Importa el store
import PokemonCard from '../components/PokemonCard.vue';
import { usePokemonApi } from '../composables/usePokemonApi';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    const details = await Promise.all(results.map(async (pokemon) => {
        const data = await fetchPokemonDetails(pokemon.url);
        console.log(data);
        return {
            id: data.id,
            name: data.name,
            image: data.sprites.front_default,
            types: data.types.map((type) => type.type.name),
            stats: data.stats
        };
    }));
    console.log(details);
    pokemonList.value.push(...details);
};
// Cargar más Pokémon
const loadMorePokemons = () => {
    offset.value += limit;
    loadPokemons();
};
// Navegar al detalle de un Pokémon
const goToDetail = (pokemon) => {
    console.log(pokemon.id);
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4") }, });
    for (const [pokemon] of __VLS_getVForSourceType((__VLS_ctx.pokemonList))) {
        // @ts-ignore
        [PokemonCard,];
        // @ts-ignore
        const __VLS_0 = __VLS_asFunctionalComponent(PokemonCard, new PokemonCard({ key: ((pokemon.id)), pokemon: ((pokemon)), onAddToTeam: ((__VLS_ctx.addToTeam)), onRemoveFromTeam: ((__VLS_ctx.removeFromTeam)), onViewDetail: ((__VLS_ctx.goToDetail)), fromView: ((__VLS_ctx.isInTeam(pokemon.id))), disableAdd: ((__VLS_ctx.team.length >= 6 || __VLS_ctx.isInTeam(pokemon.id))), }));
        const __VLS_1 = __VLS_0({ key: ((pokemon.id)), pokemon: ((pokemon)), onAddToTeam: ((__VLS_ctx.addToTeam)), onRemoveFromTeam: ((__VLS_ctx.removeFromTeam)), onViewDetail: ((__VLS_ctx.goToDetail)), fromView: ((__VLS_ctx.isInTeam(pokemon.id))), disableAdd: ((__VLS_ctx.team.length >= 6 || __VLS_ctx.isInTeam(pokemon.id))), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 text-center") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.loadMorePokemons) }, ...{ class: ("bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700") }, });
    __VLS_styleScopedClasses['xs:mt-6'];
    __VLS_styleScopedClasses['mt-[80px]'];
    __VLS_styleScopedClasses['md:mt-[80px]'];
    __VLS_styleScopedClasses['lg:mt-[60px]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-7xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['sm:grid-cols-3'];
    __VLS_styleScopedClasses['lg:grid-cols-5'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
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
            pokemonList: pokemonList,
            loadMorePokemons: loadMorePokemons,
            goToDetail: goToDetail,
            addToTeam: addToTeam,
            removeFromTeam: removeFromTeam,
            isInTeam: isInTeam,
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
