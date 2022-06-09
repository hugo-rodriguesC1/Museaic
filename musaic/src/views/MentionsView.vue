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
      Mentions légales
    </h1>
    <div class="bg-gray-800 col-span-full row-span-5">
      <div
        class="
          flex flex-row
          justify-between
          mx-40
          mt-20
          text-white
          font-montserrat
          text-base
        "
      >
        <div>
          <h2 class="font-bold text-xl mb-4">Identité de l'hébergeur</h2>
          <p>Infomaniak</p>
          <p>Société anonyme</p>
          <p>Genève, Suisse</p>
          <p>infomaniak.com</p>
        </div>
        <div>
          <h2 class="font-bold text-xl mb-4">Coordonnées de l'équipe</h2>
          <p>Jonas Philippe-Gallat</p>
          <p class="mb-4">jonas.pgallat@gmail.com</p>
          <p>Hugo Rodrigues</p>
          <p>rodrig.hugo90@gmail.com</p>
        </div>
        <div>
          <h2 class="font-bold text-xl mb-4 text-transparent">d</h2>
          <p>Thomas Paquier</p>
          <p class="mb-4">bpthomas2003@gmail.com</p>
          <p>Zoé-Augustine Vicat</p>
          <p>zoe.a.vicat@gmail.com</p>
        </div>
      </div>
      <div
        class="
          flex flex-row
          justify-start
          gap-32
          mx-40
          mt-20
          text-white
          font-montserrat
          text-base
        "
      >
        <div>
          <h2 class="font-bold text-xl mb-4">Projet étudiant</h2>
          <p>Ce site a été réalisé</p>
          <p>dans le cadre d'un projet</p>
          <p>étudiant en MMI</p>
        </div>
        <div>
          <h2 class="font-bold text-xl mb-4">Siège social</h2>
          <p>Département MMI</p>
          <p>4 place Tharradin,</p>
          <p>25200 Montbéliard</p>
        </div>
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
