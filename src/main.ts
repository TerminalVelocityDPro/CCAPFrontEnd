import { createApp } from "vue";
import { Data } from "./interfaces";
import { dataStore } from "./store/DataStore";
import fetch from "node-fetch";
import App from "./App.vue";

// Get Data from the Backend
const getData = async () => {
  // Commented Out since PHP doesn't work while serving.

  // const data = await fetch("http://localhost/backend.php", { method: "GET" });
  // const body: Data = await data.json();

  // console.log(body);

  // Temporary Filler Data
  const body: Data = {
    totalCnt: 10,
    stressPercents: [10, 10, 10, 10, 50, 10, 10, 10, 10, 10],
    struggleCnts: {
      covid: 20,
      family: 20,
      friends: 20,
      learning: 20,
      overall: 20
    },
    covidCnts: {
      fear: 5,
      worriedOthers: 5,
      worriedSelf: 5,
      job: 5
    },
    protectCnt: 10,
    statsCnt: 10,
    familyCnts: {
      divorce: 5,
      illness: 5,
      moving: 5,
      finance: 5
    },
    houseCnt: 8,
    friendCnts: {
      conflict: 5,
      nervousness: 5,
      communication: 5,
      kit: 5
    },
    socialCnt: 5,
    schoolCnts: {
      internet: 5,
      difficulty: 5,
      accessibility: 5,
      distractions: 5
    },
    techCnt: 10,
    tutorCnt: 10,
    focusCnt: 10,
    counselingCnt: 10,
    transitionCnt: 15
  };

  dataStore.update(body);
};

getData();

// Create and mount app based on App class (App.vue)
createApp(App).mount("#app");
