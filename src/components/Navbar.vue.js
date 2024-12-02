import { ref, computed, watch } from 'vue';
import { useRouter } from 'vue-router';
import { useTeamStore } from '../store/teamStore';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Estado del buscador
const searchQuery = ref('');
const isSearchVisible = ref(false);
// Determina si la pantalla es grande (lg)
const isLargeScreen = ref(window.innerWidth >= 1024);
const updateScreenSize = () => {
    isLargeScreen.value = window.innerWidth >= 1024;
};
// Actualiza el tamaño al redimensionar
window.addEventListener('resize', updateScreenSize);
// Router para redirigir al usuario
const router = useRouter();
// Estado global del equipo
const teamStore = useTeamStore();
const teamCount = computed(() => teamStore.team.length); // Calcula el número de Pokémon en el equipo
const searchPokemon = () => {
    if (searchQuery.value.trim() !== '') {
        router.push(`/search/${searchQuery.value.trim().toLowerCase()}`);
        searchQuery.value = ''; // Limpia el campo de búsqueda
        isSearchVisible.value = false; // Oculta el buscador en pantallas pequeñas
    }
};
const toggleSearch = () => {
    isSearchVisible.value = !isSearchVisible.value;
};
// Limpia el listener al destruir el componente
watch(isSearchVisible, (visible) => {
    if (!visible && !isLargeScreen.value)
        searchQuery.value = '';
});
window.addEventListener('beforeunload', () => {
    window.removeEventListener('resize', updateScreenSize);
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
    // CSS variable injection 
    // CSS variable injection end 
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.nav, __VLS_intrinsicElements.nav)({ ...{ class: ("mb-10 bg-blue-500 text-white px-4 py-2 flex flex-col lg:flex-row lg:items-center lg:justify-between fixed top-0 left-0 w-full z-50 shadow-md") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex flex-col lg:flex-row items-start lg:items-center lg:space-x-4") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.ul, __VLS_intrinsicElements.ul)({ ...{ class: ("flex flex-wrap space-x-4 mt-2 lg:mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.img)({ src: ("../../public/pokeball.png"), alt: ("Pokeball Logo"), ...{ class: ("w-8 h-8") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.h1, __VLS_intrinsicElements.h1)({ ...{ class: ("text-lg font-bold") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ to: ("/"), ...{ class: ("hover:underline mt-4") }, }));
    const __VLS_2 = __VLS_1({ to: ("/"), ...{ class: ("hover:underline mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    __VLS_nonNullable(__VLS_5.slots).default;
    var __VLS_5;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    const __VLS_6 = __VLS_resolvedLocalAndGlobalComponents.RouterLink;
    /** @type { [typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, typeof __VLS_components.RouterLink, typeof __VLS_components.routerLink, ] } */
    // @ts-ignore
    const __VLS_7 = __VLS_asFunctionalComponent(__VLS_6, new __VLS_6({ to: ("/team"), ...{ class: ("hover:underline mt-4") }, }));
    const __VLS_8 = __VLS_7({ to: ("/team"), ...{ class: ("hover:underline mt-4") }, }, ...__VLS_functionalComponentArgsRest(__VLS_7));
    if (__VLS_ctx.teamCount > 0) {
        __VLS_elementAsFunction(__VLS_intrinsicElements.span, __VLS_intrinsicElements.span)({ ...{ class: ("bg-red-500 text-white text-xs font-bold rounded-full p-2 ml-1") }, });
        (__VLS_ctx.teamCount);
    }
    __VLS_nonNullable(__VLS_11.slots).default;
    var __VLS_11;
    __VLS_elementAsFunction(__VLS_intrinsicElements.li, __VLS_intrinsicElements.li)({});
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ ...{ onClick: (__VLS_ctx.toggleSearch) }, ...{ class: ("flex items-center justify-center w-8 h-8 bg-blue-600 rounded-full hover:bg-blue-700 lg:hidden") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.svg, __VLS_intrinsicElements.svg)({ xmlns: ("http://www.w3.org/2000/svg"), fill: ("none"), viewBox: ("0 0 24 24"), stroke: ("currentColor"), ...{ class: ("w-5 h-5 text-white") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.path)({ "stroke-linecap": ("round"), "stroke-linejoin": ("round"), "stroke-width": ("2"), d: ("M15.75 15.75L19.5 19.5M10.5 4.5a6 6 0 100 12 6 6 0 000-12z"), });
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({ ...{ class: ("flex items-center lg:space-x-4 mt-4 lg:mt-0") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.form, __VLS_intrinsicElements.form)({ ...{ onSubmit: (__VLS_ctx.searchPokemon) }, ...{ class: (({
                'fixed top-16 left-4 right-4 z-50 bg-white p-4 shadow-lg rounded-lg': !__VLS_ctx.isLargeScreen,
                'flex items-center space-x-2 w-full lg:w-auto': __VLS_ctx.isLargeScreen
            })) }, ...{ class: ("lg:flex") }, });
    __VLS_asFunctionalDirective(__VLS_directives.vShow)(null, { ...__VLS_directiveBindingRestFields, modifiers: {}, value: (__VLS_ctx.isSearchVisible || __VLS_ctx.isLargeScreen) }, null, null);
    __VLS_elementAsFunction(__VLS_intrinsicElements.input)({ value: ((__VLS_ctx.searchQuery)), type: ("text"), placeholder: ("Search Pokémon"), ...{ class: ("px-4 py-2 w-full lg:w-auto rounded-l-md border-none focus:ring-2 focus:ring-blue-300 text-black") }, });
    __VLS_elementAsFunction(__VLS_intrinsicElements.button, __VLS_intrinsicElements.button)({ type: ("submit"), ...{ class: ("px-4 py-2 bg-blue-600 text-white rounded-r-md hover:bg-blue-700") }, });
    __VLS_styleScopedClasses['mb-10'];
    __VLS_styleScopedClasses['bg-blue-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['lg:flex-row'];
    __VLS_styleScopedClasses['lg:items-center'];
    __VLS_styleScopedClasses['lg:justify-between'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-0'];
    __VLS_styleScopedClasses['left-0'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['shadow-md'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-col'];
    __VLS_styleScopedClasses['lg:flex-row'];
    __VLS_styleScopedClasses['items-start'];
    __VLS_styleScopedClasses['lg:items-center'];
    __VLS_styleScopedClasses['lg:space-x-4'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['flex-wrap'];
    __VLS_styleScopedClasses['space-x-4'];
    __VLS_styleScopedClasses['mt-2'];
    __VLS_styleScopedClasses['lg:mt-0'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['text-lg'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['hover:underline'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['bg-red-500'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['text-xs'];
    __VLS_styleScopedClasses['font-bold'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['p-2'];
    __VLS_styleScopedClasses['ml-1'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['justify-center'];
    __VLS_styleScopedClasses['w-8'];
    __VLS_styleScopedClasses['h-8'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['rounded-full'];
    __VLS_styleScopedClasses['hover:bg-blue-700'];
    __VLS_styleScopedClasses['lg:hidden'];
    __VLS_styleScopedClasses['w-5'];
    __VLS_styleScopedClasses['h-5'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['lg:space-x-4'];
    __VLS_styleScopedClasses['mt-4'];
    __VLS_styleScopedClasses['lg:mt-0'];
    __VLS_styleScopedClasses['fixed'];
    __VLS_styleScopedClasses['top-16'];
    __VLS_styleScopedClasses['left-4'];
    __VLS_styleScopedClasses['right-4'];
    __VLS_styleScopedClasses['z-50'];
    __VLS_styleScopedClasses['bg-white'];
    __VLS_styleScopedClasses['p-4'];
    __VLS_styleScopedClasses['shadow-lg'];
    __VLS_styleScopedClasses['rounded-lg'];
    __VLS_styleScopedClasses['flex'];
    __VLS_styleScopedClasses['items-center'];
    __VLS_styleScopedClasses['space-x-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['lg:w-auto'];
    __VLS_styleScopedClasses['lg:flex'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['w-full'];
    __VLS_styleScopedClasses['lg:w-auto'];
    __VLS_styleScopedClasses['rounded-l-md'];
    __VLS_styleScopedClasses['border-none'];
    __VLS_styleScopedClasses['focus:ring-2'];
    __VLS_styleScopedClasses['focus:ring-blue-300'];
    __VLS_styleScopedClasses['text-black'];
    __VLS_styleScopedClasses['px-4'];
    __VLS_styleScopedClasses['py-2'];
    __VLS_styleScopedClasses['bg-blue-600'];
    __VLS_styleScopedClasses['text-white'];
    __VLS_styleScopedClasses['rounded-r-md'];
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
            searchQuery: searchQuery,
            isSearchVisible: isSearchVisible,
            isLargeScreen: isLargeScreen,
            teamCount: teamCount,
            searchPokemon: searchPokemon,
            toggleSearch: toggleSearch,
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
