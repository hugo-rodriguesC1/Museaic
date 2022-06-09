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
      Compte
    </h1>
    <card title="Informations">
      <div class="flex mt-5 gap-10 items-center">
        <div
          class="w-20 h-20 bg-gray-100 border-2 border-purple-400 rounded-full"
        ></div>
        <div class="flex flex-col items-center">
          <div class="font-montserrat text-xl text-white">Hugo Rodriges</div>
          <div class="font-montserrat text-lg text-gray-200">Hugo#0001</div>
        </div>
      </div>
      <div class="font-montserrat text-white text-base mt-5 bg-gray-900 p-3">
        Bienvenue sur mon profil ! Merci pour vos likes ! N’hésitez pas à
        visiter mes musées et à voir mes oeuvres.
      </div>
    </card>
    <Card title="Amis"
      ><div class="flex flex-col mt-4 gap-4 pr-5">
        <div
          class="
            flex flex-row
            w-full
            text-white text-sm
            font-montserrat
            items-center
            justify-between
          "
        >
          <div class="flex flex-row items-center gap-5">
            <img
              src="/img/Illustration/pp1.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div>Loic#4583</div>
          </div>
          <div class="bg-green-400 rounded-full w-3 h-3"></div>
        </div>
        <div
          class="
            flex flex-row
            w-full
            text-white text-sm
            font-montserrat
            items-center
            justify-between
          "
        >
          <div class="flex flex-row items-center gap-5">
            <img
              src="/img/Illustration/pp2.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div>John#7944</div>
          </div>

          <div class="bg-green-400 rounded-full w-3 h-3"></div>
        </div>
        <div
          class="
            flex flex-row
            w-full
            text-white text-sm
            font-montserrat
            items-center
            justify-between
          "
        >
          <div class="flex flex-row items-center gap-5">
            <img
              src="/img/Illustration/pp3.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div>Antoine#8005</div>
          </div>

          <div class="bg-green-400 rounded-full w-3 h-3"></div>
        </div></div
    ></Card>
    <Card title="Mes oeuvres" class="row-span-4">
      <div class="flex flex-row gap-4 mt-4">
        <img src="/img/Illustration/oeuvrePerso1.jpg" alt="" />
        <img src="/img/Illustration/oeuvrePerso2.jpg" alt="" />
      </div>
      <div class="flex flex-row gap-4 mt-4">
        <img src="/img/Illustration/oeuvrePerso3.jpg" alt="" />
        <img src="/img/Illustration/oeuvrePerso4.jpg" alt="" />
      </div>
      <div class="flex flex-row gap-4 mt-4">
        <img
          src="/img/Illustration/oeuvrePerso5.jpg"
          alt=""
          class="w-full h-auto object-cover"
        />
        <div class="flex flex-col gap-2 w-full">
          <button
            class="
              w-full
              p-4
              text-white
              font-montserrat
              text-base
              border-2 border-white
            "
          >
            Voir plus
          </button>
          <button
            class="
              w-full
              p-4
              text-white
              font-montserrat
              text-base
              border-2 border-white
              bg-purple-400
            "
          >
            Poster
          </button>
        </div>
      </div>
    </Card>

    <card title="Collections"
      ><div class="flex flex-row mt-4 gap-4 justify-between">
        <img src="/img/Illustration/collec1.png" alt="" class="w-full" />
        <img src="/img/Illustration/collec2.png" alt="" class="w-full" />
      </div>
      <button
        class="
          w-full
          p-4
          text-white
          font-montserrat
          text-base
          border-2 border-white
          mt-4
        "
      >
        Voir plus
      </button></card
    >
    <card title="Musées"
      ><div class="flex flex-row mt-4 gap-4 justify-between">
        <img
          src="/img/Illustration/musee1.jpg"
          alt=""
          class="w-64 object-cover h-28"
        />
        <div
          class="
            w-80
            h-28
            border border-white
            relative
            flex
            justify-center
            items-center
          "
        >
          <div class="w-12 h-px bg-white"></div>
          <div class="h-12 w-px bg-white absolute"></div>
        </div>
      </div>
      <button
        class="
          w-full
          p-4
          text-white
          font-montserrat
          text-base
          border-2 border-white
          mt-4
        "
      >
        Voir plus
      </button></card
    >
  </div>
</template>

<script>
import Card from "../components/Card.vue";

export default {
  name: "App",
  components: { Card },
};
</script>
