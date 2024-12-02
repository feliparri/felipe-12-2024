import { defineProps } from 'vue';
const { defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Props
const __VLS_props = defineProps({
    pokemon: {
        type: Object,
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
// Colores de fondo de tipo
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
// Reproducir el sonido del Pokémon
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
    __VLS_styleScopedClasses['pokemon-card'];
    __VLS_styleScopedClasses['pokemon-card'];
    __VLS_styleScopedClasses['pokemon-card'];
    __VLS_styleScopedClasses['pokemon-card'];
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("pokemon-card border p-6 mt-10 rounded shadow hover:shadow-md transition relative") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute -top-4 left-4 flex space-x-2") }, });
    for (const [type] of __VLS_getVForSourceType((__VLS_ctx.pokemon.types))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((type)), ...{ class: ("w-10 h-10 rounded-full flex items-center justify-center text-white text-xl shadow-lg") }, ...{ style: (({ backgroundColor: __VLS_ctx.typeColors[type] || '#666' })) }, });
        (__VLS_ctx.typeIcons[type] || '?');
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ((`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/${__VLS_ctx.pokemon.id}.png`)), alt: ((__VLS_ctx.pokemon.name)), ...{ class: ("mx-auto w-24 h-24") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.h3, __VLS_intrinsicElements.h3)({ ...{ class: ("text-lg font-bold text-center mt-2 capitalize") }, });
    (__VLS_ctx.pokemon.name);
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.playCry(__VLS_ctx.pokemon);
            } }, ...{ class: ("mt-4 bg-yellow-500 text-white px-4 py-2 rounded hover:bg-yellow-600 w-full") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("mt-4 grid grid-cols-3 gap-2") }, });
    for (const [stat] of __VLS_getVForSourceType((__VLS_ctx.pokemon.stats))) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ key: ((stat.stat.name)), ...{ class: ("text-center") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("bg-gray-200 rounded-full h-2 relative") }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("absolute top-0 left-0 h-2 bg-blue-500 rounded-full") }, ...{ style: (({ width: `${(stat.base_stat / 255) * 100}%` })) }, });
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("text-xs text-gray-600 capitalize") }, });
        (stat.stat.name);
    }
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                __VLS_ctx.onViewDetail(__VLS_ctx.pokemon);
            } }, ...{ class: ("mt-2 bg-blue-500 text-white px-4 py-1 rounded hover:bg-blue-700 w-full") }, });
    if (!__VLS_ctx.disableAdd) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((!__VLS_ctx.disableAdd)))
                        return;
                    __VLS_ctx.onAddToTeam(__VLS_ctx.pokemon);
                } }, ...{ class: ("mt-2 bg-green-500 text-white px-4 py-2 rounded hover:bg-green-700 w-full") }, });
    }
    if (__VLS_ctx.fromView) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (...[$event]) => {
                    if (!((__VLS_ctx.fromView)))
                        return;
                    __VLS_ctx.onRemoveFromTeam(__VLS_ctx.pokemon);
                } }, ...{ class: ("mt-2 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-700 w-full") }, });
    }
    var __VLS_0 = {};
    __VLS_styleScopedClasses['pokemon-card'];
    __VLS_styleScopedClasses['border'];
    __VLS_styleScopedClasses['p-6'];
    __VLS_styleScopedClasses['mt-10'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['shadow'];
    __VLS_styleScopedClasses['hover:shadow-md'];
    __VLS_styleScopedClasses['transition'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['-top-4'];
    __VLS_styleScopedClasses['left-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['w-10'];
    __VLS_styleScopedClasses['h-10'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-xl'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['mx-auto'];
    __VLS_styleScopedClasses['w-24'];
    __VLS_styleScopedClasses['h-24'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['capitalize'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['bg-yellow-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-yellow-600'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['grid'];
    __VLS_styleScopedClasses['grid-cols-3'];
    __VLS_styleScopedClasses['gap-2'];
    __VLS_styleScopedClasses['text-center'];
    __VLS_styleScopedClasses['bg-gray-200'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['relative'];
    __VLS_styleScopedClasses['absolute'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['h-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['text-gray-600'];
    __VLS_styleScopedClasses['capitalize'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-1'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-green-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-green-700'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['rounded'];
    __VLS_styleScopedClasses['hover:bg-red-700'];
    __VLS_styleScopedClasses['w-full'];
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
    },
});
const __VLS_component = (await import('vue')).defineComponent({
    setup() {
        return {};
    },
    props: {
        pokemon: {
            type: Object,
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
    },
    __typeEl: {},
});
export default {};
; /* PartiallyEnd: #4569/main.vue */
