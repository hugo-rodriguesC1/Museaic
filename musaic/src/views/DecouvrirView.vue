<template>
  <div class="grid w-full bg-gray-900 grid-cols-6 gap-5 px-5 py-16 h-full">
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
      Découvrir
    </h1>
    <div class="col-span-full flex flex-row justify-between">
      <div class="relative">
        <input
          class="
            bg-gray-700
            h-10
            text-gray-400
            rounded-md
            font-montserrat
            text-sm
            w-80
            flex flex-row
            items-center
            gap-4
            pl-12
          "
          placeholder="Rechercher un musée..."
        />
        <Search class="absolute top-2 left-3 bottom-0" />
      </div>
      <div class="flex flex-row gap-2 items-center">
        <div class="font-montserrat font-bold text-sm text-white">
          Trier par
        </div>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-md
            border-[1px] border-white
            px-1
            h-7
            active:bg-purple-500 active:border-0
            focus:bg-purple-500 focus:border-0
          "
        >
          Pertinence
        </button>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-md
            border-[1px] border-white
            px-1
            h-7
            active:bg-purple-500 active:border-0
            focus:bg-purple-500 focus:border-0
          "
        >
          Date de mise en ligne
        </button>
        <button
          type="button"
          class="
            text-white
            font-montserrat
            text-xs
            bg-transparent
            rounded-md
            border-[1px] border-white
            px-1
            h-7
            active:bg-purple-500 active:border-purple-500
            focus:bg-purple-500 focus:border-purple-500
          "
        >
          Popularité
        </button>
      </div>
    </div>

    <div class="col-span-6 overflow-y-scroll scrollbar-hide">
      <h2 class="font-montserrat font-bold text-2xl text-purple-400 mb-4">
        Top tendances
      </h2>
      <div
        class="
          grid grid-flow-col
          auto-cols-max
          grid-rows-1
          gap-8
          scrollbar-hide
          mb-4
        "
      >
        <DiscoverCard bg="/img/Discover/DecImg.png" />
        <DiscoverCard />
        <DiscoverCard />
        <DiscoverCard />
      </div>
      <h2 class="font-montserrat font-bold text-2xl text-purple-400 mb-4">
        Musées
      </h2>
      <div
        class="
          grid grid-flow-col
          auto-cols-max
          grid-rows-1
          gap-8
          scrollbar-hide
        "
      >
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
      </div>
      <div
        class="
          grid grid-flow-col
          auto-cols-max
          grid-rows-1
          gap-8
          scrollbar-hide
        "
      >
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
        <img
          src="/img/Discover/discoverMuseum.png"
          alt="musée amis"
          class="w-56"
        />
      </div>
    </div>
  </div>
</template>

<script>
import Search from "../components/icons/Search.vue";
import Like from "../components/icons/Like.vue";
import Comment from "../components/icons/Comment.vue";
import DiscoverCard from "../components/DiscoverCard.vue";

export default {
  name: "Decouvrir",
  components: { Search, Like, Comment, DiscoverCard },
};
</script>