import { ref, onMounted, watch } from 'vue';
import { useRoute, useRouter } from 'vue-router';
import { usePokemonApi } from '../composables/usePokemonApi';
import PokemonDetailCard from '../components/PokemonDetailCard.vue';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
const { fetchPokemonDetails, fetchEvolutionChain } = usePokemonApi();
const route = useRoute();
const router = useRouter();
const pokemonDetails = ref(null);
const evolutionChain = ref([]);
const error = ref(null);
const loadPokemonDetails = async () => {
    try {
        const id = route.params.id;
        const details = await fetchPokemonDetails(`https://pokeapi.co/api/v2/pokemon/${id}`);
        pokemonDetails.value = {
            id: details.id,
            name: details.name,
            image: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${details.id}.png`,
            types: details.types.map((t) => t.type.name),
            stats: details.stats.map((s) => ({
                name: s.stat.name,
                base: s.base_stat,
            })),
            height: details.height,
            weight: details.weight,
        };
        const speciesData = await fetchPokemonDetails(details.species.url);
        if (speciesData.evolution_chain) {
            // Extrae y convierte el ID de la cadena evolutiva a un número
            const evolutionChainId = parseInt(speciesData.evolution_chain.url.split('/evolution-chain/')[1].split('/')[0], 10);
            const evolutionData = await fetchEvolutionChain(evolutionChainId); // Pasa como número
            parseEvolutionChain(evolutionData.chain);
        }
    }
    catch (e) {
        error.value = 'Failed to load Pokémon details. Please try again later.';
        console.error(e);
    }
};
const parseEvolutionChain = (chain) => {
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
watch(() => route.params.id, () => {
    loadPokemonDetails();
});
const goToPokemon = (id) => {
    router.push(`/pokemon/${id}`);
};
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-4xl mx-auto ") }, });
    if (__VLS_ctx.error) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-red-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
        (__VLS_ctx.error);
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
        /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("text-blue-500") }, }));
        const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("text-blue-500") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
        __VLS_nonNullable(__VLS_5.slots).default;
        var __VLS_5;
    }
    else if (__VLS_ctx.pokemonDetails) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("lg:flex lg:gap-8") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.aside, __VLS_intrinsicElements.aside)({ ...{ class: ("hidden lg:flex flex-col gap-4 pr-4") }, ...{ style: ({}) }, });
        for (const [evolution] of __VLS_getVForSourceType((__VLS_ctx.evolutionChain))) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                        if (!(!((__VLS_ctx.error))))
                            return;
                        if (!((__VLS_ctx.pokemonDetails)))
                            return;
                        __VLS_ctx.goToPokemon(evolution.id);
                    } }, key: ((evolution.id)), src: ((evolution.image)), alt: ((evolution.name)), ...{ class: ("cursor-pointer hover:opacity-75 w-16 h-16 mx-auto") }, title: ("View {{ evolution.name }}"), });
        }
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.router.back) }, ...{ class: ("block mt-8 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-bold mt-2 lg:hidden") }, });
        if (__VLS_ctx.evolutionChain.length && !__VLS_ctx.error) {
            __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-wrap gap-4 mt-4 lg:hidden") }, });
            for (const [evolution] of __VLS_getVForSourceType((__VLS_ctx.evolutionChain))) {
                __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ ...{ onClick: (...[$event]) => {
                            if (!(!((__VLS_ctx.error))))
                                return;
                            if (!((__VLS_ctx.pokemonDetails)))
                                return;
                            if (!((__VLS_ctx.evolutionChain.length && !__VLS_ctx.error)))
                                return;
                            __VLS_ctx.goToPokemon(evolution.id);
                        } }, key: ((evolution.id)), src: ((evolution.image)), alt: ((evolution.name)), ...{ class: ("cursor-pointer hover:opacity-75 w-16 h-16") }, title: ("View {{ evolution.name }}"), });
            }
            __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.router.back) }, ...{ class: ("flex flex-row-reverse space-x-4 space-x-reverse block mt-4 mb-6 bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 lg:hidden") }, });
        }
        // @ts-ignore
        [PokemonDetailCard,];
        // @ts-ignore
        const __VLS_6 = __VLS_asFunctionalComponent(PokemonDetailCard, new PokemonDetailCard({ pokemon: ((__VLS_ctx.pokemonDetails)), }));
        const __VLS_7 = __VLS_6({ pokemon: ((__VLS_ctx.pokemonDetails)), }, ...__VLS_functionalComponentArgsRest(__VLS_6));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    __VLS_styleScopedClasses['xs:mt-6'];
    __VLS_styleScopedClasses['mt-[80px]'];
    __VLS_styleScopedClasses['md:mt-[80px]'];
    __VLS_styleScopedClasses['lg:mt-[60px]'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['max-w-4xl'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['text-red-500'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['lg:flex'];
    __VLS_styleScopedClasses['lg:gap-8'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['lg:flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['pr-4'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:opacity-75'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['h-16'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['cursor-pointer'];
    __VLS_styleScopedClasses['hover:opacity-75'];
    __VLS_styleScopedClasses['w-16'];
    __VLS_styleScopedClasses['h-16'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-row-reverse'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['space-x-reverse'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['mb-6'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['lg:hidden'];
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
            PokemonDetailCard: PokemonDetailCard,
            router: router,
            pokemonDetails: pokemonDetails,
            evolutionChain: evolutionChain,
            error: error,
            goToPokemon: goToPokemon,
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
