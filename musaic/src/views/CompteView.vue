<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6
      auto-rows-[17.35vh]
      gap-5
      px-5
      py-12
      h-full
    "
  >
    <card title="Informations" class="col-span-4">
      <div class="flex justify-between mt-5">
        <div class="w-40 text-white text-xs font-medium">
          "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat.
        </div>
        <div class="w-96 bg-white"></div>
      </div>
    </card>
    <Card title="Amis" />
    <card title="Nouveautés"
      ><div class="grid grid-cols-2 gap-4 my-4 h-5/6">
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div>
        <div class="bg-white"></div></div
    ></card>
    <card title="Favoris" class="col-span-4"></card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "App",
  components: { Card },
};
</script>
