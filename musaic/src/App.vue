<template>
  <div class="flex flex-col h-full">
    <HeaderComp class="flex-initial" />
    <div class="flex flex-row h-full">
      <MenuComp />
      <RouterView />
    </div>
  </div>
</template>

<script>
import { RouterLink, RouterView } from "vue-router";

import HeaderComp from "./components/HeaderComp.vue";
import MenuComp from "./components/MenuComp.vue";
import Card from "./components/Card.vue";

export default {
  name: "App",
  components: { HeaderComp, MenuComp, Card },
};
</script>