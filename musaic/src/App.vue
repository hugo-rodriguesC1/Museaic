<template>
  <div class="flex flex-col h-screen">
    <HeaderComp class="flex-initial" />
    <div class="flex flex-row h-full">
      <MenuComp />
      <div></div>
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import HeaderComp from "./components/HeaderComp.vue";
import MenuComp from "./components/MenuComp.vue";

export default {
  name: "App",
  components: { HeaderComp, MenuComp },
};
</script>