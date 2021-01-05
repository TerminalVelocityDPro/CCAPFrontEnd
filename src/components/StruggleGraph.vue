<template>
  <div class="chart-container">
    <canvas id="struggle-graph"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "../store/DataStore";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default defineComponent({
  name: "StruggleGraph",
  setup() {
    const dataState = dataStore.getState();
    const ctx = "struggle-graph";
    let myPieChart: Chart;

    onMounted(() => {
      if (ctx !== null) {
        myPieChart = new Chart(ctx, {
          type: "bar",
          plugins: [ChartDataLabels],
          data: {
            labels: ["COVID", "Family", "Friends", "Learning", "Overall"],
            datasets: [
              {
                data: Object.values(dataState.struggleCnts),
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
                  return value + " students";
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
