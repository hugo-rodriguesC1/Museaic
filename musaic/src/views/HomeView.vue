<template>
  <div class="grid w-full bg-gray-900 grid-cols-6 grid-rows-4 gap-5 px-5 py-12">
    <card title="Nouveautés"
      ><div class="grid grid-cols-2 auto-rows-[12.7vh] gap-4 mt-4 h-5/6">
        <div class="relative">
          <img
            src="/img/Illustration/Lancement.jpg"
            alt=""
            class="object-cover w-full h-full"
          />
          <p class="absolute top-1/3 text-gray-200 text-xs left-2">
            Lancement Beta
          </p>
          <Logo class="absolute top-1/2 text-white font-semibold left-1.5">
          </Logo>
        </div>
        <div class="relative">
          <img
            src="/img/Illustration/Base.jpg"
            alt="fond marin sombre"
            class="object-cover w-full h-full"
          />
          <p class="absolute top-1/3 text-gray-200 text-xs left-2">
            Disponible
          </p>
          <h3 class="absolute top-1/2 text-white font-semibold left-2">
            Pack de base
          </h3>
        </div>
        <div class="relative">
          <img
            src="/img/Illustration/Profondeur.jpg"
            alt="fond marin sombre"
            class="object-cover w-full h-full"
          />
          <p class="absolute top-1/3 text-gray-200 text-xs left-2">
            Prochainement
          </p>
          <h3 class="absolute top-1/2 text-white font-semibold left-2">
            Profondeur
          </h3>
        </div>
        <div class="relative">
          <img
            src="/img/Illustration/Crypte.jpg"
            alt="fond marin sombre"
            class="object-cover w-full h-full"
          />
          <p class="absolute top-1/3 text-gray-200 text-xs left-2">
            Prochainement
          </p>
          <h3 class="absolute top-1/2 text-white font-semibold left-2">
            Crypte
          </h3>
        </div>
      </div></card
    >
    <card title="Mon musée">
      <router-link to="/musee"
        ><div class="bg-white w-full h-5/6 my-4"></div
      ></router-link>
    </card>
    <Card />
    <Card />
    <Card class="col-span-4" />
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Logo from "../components/icons/Logo.vue";

export default {
  name: "App",
  components: { Card, Logo },
};
</script>
