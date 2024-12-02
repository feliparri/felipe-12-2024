import { computed } from 'vue';
import { useTeamStore } from '../store/teamStore';
import PokemonCard from '../components/PokemonCard.vue';
import { useRouter } from 'vue-router';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
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
    console.log(router);
    router.push(`/team/${pokemon.id}`);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("xs:mt-6 mt-[80px] md:mt-[80px] lg:mt-[60px] w-full max-w-7xl mx-auto ") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-2xl font-bold mb-4") }, });
    if (__VLS_ctx.team.length === 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-gray-500") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-4") }, });
        for (const [pokemon] of __VLS_getVForSourceType((__VLS_ctx.team))) {
            // @ts-ignore
            [PokemonCard,];
            // @ts-ignore
            const __VLS_0 = __VLS_asFunctionalComponent(PokemonCard, new PokemonCard({ key: ((pokemon.id)), pokemon: ((pokemon)), onRemoveFromTeam: ((__VLS_ctx.removeFromTeam)), onViewDetail: ((__VLS_ctx.goToDetail)), disableAdd: (true), }));
            const __VLS_1 = __VLS_0({ key: ((pokemon.id)), pokemon: ((pokemon)), onRemoveFromTeam: ((__VLS_ctx.removeFromTeam)), onViewDetail: ((__VLS_ctx.goToDetail)), disableAdd: (true), }, ...__VLS_functionalComponentArgsRest(__VLS_0));
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
    __VLS_styleScopedClasses['text-gray-500'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['sm:grid-cols-3'];
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
            removeFromTeam: removeFromTeam,
            goToDetail: goToDetail,
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
