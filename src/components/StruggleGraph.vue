<template>
  <div class="chart-container">
    <canvas id="struggle-graph"></canvas>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from "vue";
import { dataStore } from "../store/DataStore";
import { metaStore } from "../store/MetaStore";
import Chart from "chart.js";
import ChartDataLabels from "chartjs-plugin-datalabels";

export default defineComponent({
  name: "StruggleGraph",
  setup() {
    const dataState = dataStore.getState();
    const metaState = metaStore.getState();
    const ctx = "struggle-graph";
    let barGraph: Chart;

    onMounted(() => {
      if (ctx !== null) {
        barGraph = new Chart(ctx, {
          type: "bar",
          plugins: [ChartDataLabels],
          data: {
            labels: ["COVID", "Family", "Friends", "Learning", "Overall"],
            datasets: [
              {
                data: Object.values(dataState.struggleCnts),
                backgroundColor: context => {
                  return context.dataIndex === metaState.selected
                    ? "#E1081B"
                    : "#063C84";
                }
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
                  return value + " students";
                }
              }
            },
            onClick: evt => {
              const element: Array<any> = barGraph.getElementAtEvent(evt);
              metaStore.update(element[0]._index);
              barGraph.update();
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
