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
      h-full
    "
  >
    <h1
      class="
        font-montserrat font-bold
        text-2xl text-white
        absolute
        top-1
        right-0
        left-0
        text-center
      "
    >
      Achat de coins
    </h1>
    <div class="bg-gray-800 col-span-full row-span-5">
      <h2 class="font-montserrat font-bold text-xl text-white mt-10 ml-20">
        Nos offres
      </h2>
      <div class="flex flex-row gap-16 justify-between mx-20 mt-10">
        <div class="bg-gray-900 w-80 h-52 border border-purple-200">
          <div class="flex flex-row justify-between mx-8 mt-10 items-center">
            <img
              src="/img/Icon/MoneySmall.svg"
              alt="tas de pièces"
              class="w-28 h-28 obj"
            />
            <p class="font-montserrat text-xl text-purple-500 font-bold">
              500 coins
            </p>
          </div>
          <p
            class="
              font-montserrat
              text-xl text-white
              font-bold
              text-center
              mt-5
            "
          >
            3.99€
          </p>
        </div>
        <div class="bg-gray-900 w-80 h-52 border border-purple-200">
          <div class="flex flex-row justify-between mx-8 mt-10 items-center">
            <img
              src="/img/Icon/MoneyMid.svg"
              alt="tas de pièces"
              class="w-28 h-28 obj"
            />
            <p class="font-montserrat text-xl text-purple-500 font-bold">
              2,000 coins
            </p>
          </div>
          <p
            class="
              font-montserrat
              text-xl text-white
              font-bold
              text-center
              mt-5
            "
          >
            14.99€
          </p>
        </div>
        <div class="bg-gray-900 w-80 h-52 border border-purple-200">
          <div class="flex flex-row justify-between mx-8 mt-10 items-center">
            <img
              src="/img/Icon/MoneyBig.svg"
              alt="tas de pièces"
              class="w-28 h-28 obj"
            />
            <p class="font-montserrat text-xl text-purple-500 font-bold">
              10,000 coins
            </p>
          </div>
          <p
            class="
              font-montserrat
              text-xl text-white
              font-bold
              text-center
              mt-5
            "
          >
            49.99€
          </p>
        </div>
      </div>
      <div class="flex flex-row gap-16">
        <div></div>
        <div></div>
        <div></div>
      </div>
    </div>
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "Boutique",
  components: { Card },
};
</script>
