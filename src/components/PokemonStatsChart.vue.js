import { reactive, computed } from 'vue';
import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
import { Bar } from 'vue-chartjs';
const { defineProps, defineSlots, defineEmits, defineExpose, defineModel, defineOptions, withDefaults, } = await import('vue');
// Registra los elementos necesarios para Chart.js
ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
// Props
const __VLS_props = defineProps({
    stats: {
        type: Array,
        default: () => [],
    },
});
// Validar datos de stats
const isValidStats = computed(() => Array.isArray(stats) && stats.length > 0);
// Datos reactivos del gráfico
const chartData = reactive({
    labels: isValidStats.value ? stats.map((s) => s.stat.name) : [],
    datasets: [
        {
            label: 'Base Stats',
            backgroundColor: 'rgba(75, 192, 192, 0.6)',
            borderColor: 'rgba(75, 192, 192, 1)',
            borderWidth: 1,
            data: isValidStats.value ? stats.map((s) => s.base_stat) : [],
        },
    ],
});
// Opciones del gráfico
const chartOptions = {
    responsive: true,
    plugins: {
        legend: { display: true },
        title: { display: true, text: 'Pokémon Base Stats' },
    },
};
; /* PartiallyEnd: #3632/scriptSetup.vue */
const __VLS_fnComponent = (await import('vue')).defineComponent({
    props: {
        stats: {
            type: Array,
            default: () => [],
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
    let __VLS_resolvedLocalAndGlobalComponents;
    __VLS_elementAsFunction(__VLS_intrinsicElements.div, __VLS_intrinsicElements.div)({});
    if (__VLS_ctx.chartData.labels.length > 0) {
        const __VLS_0 = __VLS_resolvedLocalAndGlobalComponents.Bar;
        /** @type { [typeof __VLS_components.Bar, ] } */
        // @ts-ignore
        const __VLS_1 = __VLS_asFunctionalComponent(__VLS_0, new __VLS_0({ chartData: ((__VLS_ctx.chartData)), chartOptions: ((__VLS_ctx.chartOptions)), }));
        const __VLS_2 = __VLS_1({ chartData: ((__VLS_ctx.chartData)), chartOptions: ((__VLS_ctx.chartOptions)), }, ...__VLS_functionalComponentArgsRest(__VLS_1));
    }
    else {
        __VLS_elementAsFunction(__VLS_intrinsicElements.p, __VLS_intrinsicElements.p)({ ...{ class: ("text-red-500") }, });
    }
    __VLS_styleScopedClasses['text-red-500'];
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
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
            Bar: Bar,
            chartData: chartData,
            chartOptions: chartOptions,
        };
    },
});
export default (await import('vue')).defineComponent({
    setup() {
        return {
            $props: __VLS_makeOptional(__VLS_props),
            ...__VLS_props,
        };
    },
    __typeEl: {},
});
; /* PartiallyEnd: #4569/main.vue */
