<template>
  <div class="chart-container h-40 w-full">
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
    let myPieChart: Chart;

    onMounted(() => {
      if (ctx !== null) {
        myPieChart = new Chart(ctx, {
          type: "bar",
          plugins: [ChartDataLabels],
          data: {
            labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
            datasets: [
              {
                data: dataState.stressPercents,
                backgroundColor: "#063C84",
                hoverBackgroundColor: "#052d61",
                borderColor: "#063C84",
                borderWidth: 1
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
                    display: false
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
