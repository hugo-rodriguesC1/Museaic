<template>
  <div
    class="
      grid
      w-full
      bg-gray-900
      grid-cols-6 grid-rows-4
      gap-5
      px-5
      py-12
      h-full
    "
  >
    <card title="Actualités"
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
    <Card title="Offre du moment"
      ><router-link to="/boutique" class="">
        <img
          src="/img/Illustration/offre.jpg"
          alt="offre de la boutique"
          class="mt-4 h-5/6 w-full object-contain"
        />
      </router-link>
    </Card>
    <Card class="col-span-4" title="Nouveautés">
      <div
        class="
          flex flex-row
          items-center
          gap-12
          justify-center
          -mt-6
          text-gray-500
          font-montserrat
          text-base
        "
      >
        <button
          class="font-bold"
          @click="
            oeuvresOuvert = true;
            museeOuvert = false;
          "
          :class="oeuvresOuvert ? 'text-white' : ''"
        >
          Oeuvres
        </button>
        <button
          class="font-bold"
          @click="
            oeuvresOuvert = false;
            museeOuvert = true;
          "
          :class="museeOuvert ? 'text-white' : ''"
        >
          Musées
        </button>
      </div>
      <div v-if="museeOuvert" class="flex flex-row justify-between mt-4">
        <div class="relative">
          <img
            src="/img/Illustration/m1.jpg"
            alt="illustration du musée"
            class="w-56 h-36 object-cover border-2 border-gray-800"
          />
          <div class="flex flex-row gap-1 items-center absolute top-1/2 left-2">
            <img
              src="/img/Illustration/mpp1.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div class="flex flex-col">
              <div class="font-montserrat text-base text-white">
                Braise éternelle
              </div>
              <div class="font-montserrat text-[0.6rem] text-white">
                Par BtightLight#0068
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="/img/Illustration/m2.jpg"
            alt="illustration du musée"
            class="w-56 h-36 object-cover border-2 border-gray-800"
          />
          <div class="flex flex-row gap-1 items-center absolute top-1/2 left-2">
            <img
              src="/img/Illustration/mpp2.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div class="flex flex-col">
              <div class="font-montserrat text-base text-white">
                A bright day
              </div>
              <div class="font-montserrat text-[0.6rem] text-white">
                Par Maeva#2191
              </div>
            </div>
          </div>
        </div>
        <div class="relative">
          <img
            src="/img/Illustration/m3.jpg"
            alt="illustration du musée"
            class="w-56 h-36 object-cover border-2 border-gray-800"
          />
          <div class="flex flex-row gap-1 items-center absolute top-1/2 left-2">
            <img
              src="/img/Illustration/mpp3.jpg"
              alt="photo de profil"
              class="w-12 h-12 object-cover rounded-full"
            />
            <div class="flex flex-col">
              <div class="font-montserrat text-base text-white">Fantasia</div>
              <div class="font-montserrat text-[0.6rem] text-white">
                Par Loic#4583
              </div>
            </div>
          </div>
        </div>
      </div>
      <div v-if="oeuvresOuvert" class="flex flex-row justify-between mt-4">
        <div>
          <img
            src="/img/Illustration/o1.jpg"
            alt="oeuvre digital"
            class="w-64 h-32 object-cover"
          />
          <div class="flex flex-col font-montserrat text-white items-center">
            <div class="text-base">Hangman</div>
            <div class="text-sm">Par Omen#1002</div>
          </div>
        </div>
        <div>
          <img
            src="/img/Illustration/o2.jpg"
            alt="oeuvre digital"
            class="w-64 h-32 object-cover"
          />
          <div class="flex flex-col font-montserrat text-white items-center">
            <div class="text-base">Night Guardian</div>
            <div class="text-sm">Par Omen#1002</div>
          </div>
        </div>
        <div>
          <img
            src="/img/Illustration/o3.jpg"
            alt="oeuvre digital"
            class="w-64 h-32 object-cover"
          />
          <div class="flex flex-col font-montserrat text-white items-center">
            <div class="text-base">Future</div>
            <div class="text-sm">Par Bongsi#4668</div>
          </div>
        </div>
      </div>
    </Card>
  </div>
</template>

<script>
import Card from "../components/Card.vue";
import Logo from "../components/icons/Logo.vue";
import DiscoverCard from "../components/DiscoverCard.vue";

export default {
  name: "App",
  components: { Card, Logo, DiscoverCard },
  data() {
    return {
      oeuvresOuvert: true,
      museeOuvert: false,
    };
  },
};
</script>
