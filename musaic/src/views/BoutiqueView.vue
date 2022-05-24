<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6
      auto-rows-[minmax(90px,100px)]
      gap-5
      px-5
      py-12
    "
  >
    <card title="Nouveautés" class="col-span-full row-span-3">
      <img
        src="/img/Illustration/Crypte.jpg"
        alt="crypte"
        class="max-h-64 mx-auto"
      />
    </card>
    <card title="Nouveautés"
      ><div class="grid grid-cols-2 gap-4 my-4 h-5/6">
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div></div
    ></card>
    <card title="Nouveautés"
      ><div class="grid grid-cols-2 gap-4 my-4 h-5/6">
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div></div
    ></card>
    <card title="Nouveautés"
      ><div class="grid grid-cols-2 gap-4 my-4 h-5/6">
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div></div
    ></card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "App",
  components: { Card },
};
</script>
