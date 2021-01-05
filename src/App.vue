<template>
  <!-- Top bar - Uses the CCAP white logo in dark mode and the colored logo in light mode -->
  <picture>
    <source
      srcset="./assets/logo-white.png"
      media="(prefers-color-scheme: dark)"
    />
    <img src="./assets/logo.png" alt="CCAP Logo" class="mx-auto my-2 w-20" />
  </picture>

  <div
    class="flex flex-row p-2 m-4 max-w-full bg-white rounded-xl shadow-md items-center space-x-4 dark:bg-neutral-gray-800 dark:shadow-none"
  >
    <div class="w-6/12">
      <h1 class="font-sans text-black text-2xl text-center dark:text-gray-50">
        Stress Level
      </h1>
      <stress-graph class="mx-auto h-40 w-full mt-5" />
    </div>
    <div class="w-px h-44 border-l border-gray-400 dark:border-gray-600"></div>
    <div class="w-6/12">
      <h1 class="font-sans text-black text-2xl text-center dark:text-gray-50">
        Cause of Stress
      </h1>
      <struggle-graph class="mx-auto h-40 w-full mt-5" />
    </div>
  </div>
  <div
    class="flex p-6 m-4 max-w-full bg-white rounded-xl shadow-md items-center space-x-4 dark:bg-neutral-gray-800 dark:shadow-none"
  >
    <covid-info v-if="metaState.selected === 0"></covid-info>
    <family-info v-if="metaState.selected === 1"></family-info>
    <friends-info v-if="metaState.selected === 2"></friends-info>
    <learning-info v-if="metaState.selected === 3"></learning-info>
    <overall-info v-if="metaState.selected === 4"></overall-info>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import CovidInfo from "./components/CovidInfo.vue";
import FamilyInfo from "./components/FamilyInfo.vue";
import FriendsInfo from "./components/FriendsInfo.vue";
import LearningInfo from "./components/LearningInfo.vue";
import OverallInfo from "./components/OverallInfo.vue";
import StressGraph from "./components/StressGraph.vue";
import StruggleGraph from "./components/StruggleGraph.vue";
import { metaStore } from "./store/MetaStore";

export default defineComponent({
  name: "App",
  components: {
    "stress-graph": StressGraph,
    "struggle-graph": StruggleGraph,
    "covid-info": CovidInfo,
    "family-info": FamilyInfo,
    "friends-info": FriendsInfo,
    "learning-info": LearningInfo,
    "overall-info": OverallInfo
  },
  setup() {
    return {
      metaState: metaStore.getState()
    };
  }
});
</script>

<style lang="css">
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
