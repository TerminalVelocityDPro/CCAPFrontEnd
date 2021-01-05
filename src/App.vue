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
    <div class="w-6/12">
      <h1 class="font-sans text-black text-2xl text-center dark:text-gray-50">
        Cause of Stress
      </h1>
      <struggle-graph class="mx-auto h-40 w-full mt-5" />
    </div>
  </div>
  <div
    class="flex p-6 m-4 max-w-full bg-white rounded-xl shadow-md items-center space-x-4 dark:bg-neutral-gray-800 dark:shadow-none"
  ></div>
  <div
    class="flex p-6 m-4 max-w-full bg-white rounded-xl shadow-md items-center space-x-4 dark:bg-neutral-gray-800 dark:shadow-none"
  ></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import StressGraph from "./components/StressGraph.vue";
import StruggleGraph from "./components/StruggleGraph.vue";

export default defineComponent({
  name: "App",
  components: {
    "stress-graph": StressGraph,
    "struggle-graph": StruggleGraph
  }
});
</script>

<style lang="css">
/*! @import */
@tailwind base;
@tailwind components;
@tailwind utilities;
</style>
