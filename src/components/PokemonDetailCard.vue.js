import { defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Define las props
const __VLS_props = defineProps({
    pokemon: {
        type: Object,
        required: true,
    },
});
// Iconos de tipos
const typeIcons = {
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
const typeColors = {
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
const playCry = (pokemon) => {
    const audio = new Audio(`https://play.pokemonshowdown.com/audio/cries/${pokemon.name.toLowerCase()}.mp3`);
    audio.play();
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
});
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
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("text-md pokemon-detail-card bg-white border border-gray-200 p-6 rounded-lg shadow-lg hover:shadow-lg transition flex flex-col sm:flex-row") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1 flex flex-col items-center lg:items-center lg:pr-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-2xl font-bold text-center lg:text-center capitalize") }, });
    (__VLS_ctx.pokemon.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex justify-center space-x-4 mt-2") }, });
    for (const [type] of __VLS_getVForSourceType((__VLS_ctx.pokemon.types))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ key: ((type)), ...{ class: ("flex items-center justify-center w-12 h-12 rounded-full text-white text-xl shadow-lg") }, ...{ style: (({ backgroundColor: __VLS_ctx.typeColors[type] || '#666' })) }, });
        (__VLS_ctx.typeIcons[type] || '?');
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.playCry(__VLS_ctx.pokemon);
            } }, ...{ class: ("lg:hidden text-black bg-yellow-300 w-10 shadow-lg hover:shadow-lg") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((__VLS_ctx.pokemon.image)), alt: ((__VLS_ctx.pokemon.name)), ...{ class: ("w-60 h-60 mt-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.playCry(__VLS_ctx.pokemon);
            } }, ...{ class: ("hidden lg:block mt-4 bg-yellow-300 text-gray px-4 py-2 rounded hover:bg-yellow-600 w-full lg:w-auto") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex-1") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h4, __VLS_intrinsicElements.h4)({ ...{ class: ("text-lg font-bold mt-8 lg:mt-0 text-center lg:text-left") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4 text-center") }, });
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.pokemon.stats))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({ key: ((stat.name)), ...{ class: ("border rounded-lg p-4 relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block text-gray-600 font-bold capitalize") }, });
        (stat.name);
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("block text-blue-500 font-semibold text-xl mb-2") }, });
        (stat.base_stat);
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("progress-bar-container bg-gray-200 rounded-full h-4") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("progress-bar bg-blue-500 h-4 rounded-full") }, ...{ style: (({ width: `${(stat.base_stat / 255) * 100}%` })) }, });
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.pokemon.height);
    __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.strong, __VLS_intrinsicElements.strong)({});
    (__VLS_ctx.pokemon.weight);
    __VLS_styleScopedClasses['text-md'];
    __VLS_styleScopedClasses['pokemon-detail-card'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['border-gray-200'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['hover:shadow-lg'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['sm:flex-row'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['lg:items-center'];
    __VLS_styleScopedClasses['lg:pr-4'];
    __VLS_styleScopedClasses['text-2xl'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['lg:text-center'];
    __VLS_styleScopedClasses['capitalize'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-12'];
    __VLS_styleScopedClasses['h-12'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['bg-yellow-300'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['hover:shadow-lg'];
    __VLS_styleScopedClasses['w-60'];
    __VLS_styleScopedClasses['h-60'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['hidden'];
    __VLS_styleScopedClasses['lg:block'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['bg-yellow-300'];
    __VLS_styleScopedClasses['text-gray'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-yellow-600'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['lg:w-auto'];
    __VLS_styleScopedClasses['flex-1'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['mt-8'];
    __VLS_styleScopedClasses['lg:mt-0'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['lg:text-left'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-1'];
    __VLS_styleScopedClasses['lg:grid-cols-2'];
    __VLS_styleScopedClasses['gap-4'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['capitalize'];
    __VLS_styleScopedClasses['block'];
    __VLS_styleScopedClasses['text-blue-500'];
    __VLS_styleScopedClasses['font-semibold'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['mb-2'];
    __VLS_styleScopedClasses['progress-bar-container'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['progress-bar'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['h-4'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['mt-8'];
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
            typeIcons: typeIcons,
            typeColors: typeColors,
            playCry: playCry,
        };
    },
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        pokemon: {
            type: Object,
            required: true,
        },
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
