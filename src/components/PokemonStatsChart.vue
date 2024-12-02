<template>
    <div>
      <Bar
        v-if="chartData.labels.length > 0"
        :chart-data="chartData"
        :chart-options="chartOptions"
      />
      <p v-else class="text-red-500">No stats available to display</p>
    </div>
  </template>
  
  <script setup>
  import { reactive, computed } from 'vue';
  import { Chart as ChartJS, Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale } from 'chart.js';
  import { Bar } from 'vue-chartjs';
  
  // Registra los elementos necesarios para Chart.js
  ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale);
  
  // Props
  defineProps({
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
  </script>
  