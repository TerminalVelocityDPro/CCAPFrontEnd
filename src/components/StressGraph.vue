<template>
  <div class="chart-container">
    <canvas id="stress-graph"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "../store/DataStore";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default defineComponent({
  name: "StressGraph",
  setup() {
    const dataState = dataStore.getState();
    const ctx = "stress-graph";
    let pieChart: Chart;

    onMounted(() => {
      if (ctx !== null) {
        pieChart = new Chart(ctx, {
          type: "bar",
          plugins: [ChartDataLabels],
          data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
              {
                data: dataState.stressPercents,
                backgroundColor: "#063C84"
              }
            ]
          },
          options: {
            responsive: true,
            aspectRatio: 5,
            legend: {
              display: false
            },
            scales: {
              yAxes: [
                {
                  gridLines: {
                    display: false,
                    offsetGridLines: false
                  },
                  ticks: {
                    display: false,
                    beginAtZero: true
                  }
                }
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                    color: "#4B5563"
                  }
                }
              ]
            },
            tooltips: {
              enabled: false
            },
            plugins: {
              datalabels: {
                anchor: "end",
                align: "start",
                color: "#FFF",
                formatter: function(value, context) {
                  return value + "%";
                }
              }
            }
          }
        });
      }
    });
    return {
      dataState
    };
  }
});
</script>
