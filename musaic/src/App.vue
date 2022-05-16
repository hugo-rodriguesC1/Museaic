<template>
  <HeaderComp />
  <MenuComp />
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