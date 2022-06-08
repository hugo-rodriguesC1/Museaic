<template>
  <div class="flex flex-col w-64">
    <div class="relative">
      <img
        :src="bg"
        alt="image d'illustration du musée"
        class="w-full h-36 object-cover"
      />
      <div class="absolute top-1/2 left-3">
        <div class="flex flex-row gap-1 items-center">
          <div class="bg-white rounded-full w-16 h-16 top-[60%] left-3">
            <img
              :src="pp"
              alt="image de profil"
              class="object-cover w-full h-full"
            />
          </div>
          <div class="bg-opacity-40 bg-black p-1">
            <h3 class="font-montserrat text-white text-lg">{{ Nom }}</h3>
            <p class="font-montserrat text-white text-base">{{ User }}</p>
          </div>
        </div>
      </div>
    </div>
    <div class="w-full h-28 bg-black p-4">
      <h4 class="font-montserrat font-bold text-purple-400 text-xs">
        Description
      </h4>
      <p class="font-montserrat font-bold text-white text-[0.6rem]">
        {{ Description }}
      </p>
      <div class="flex flex-row mt-2 gap-3 justify-between">
        <div
          class="
            flex flex-row
            gap-1
            font-montserrat font-bold
            text-sm text-white
            items-center
          "
        >
          {{ Like }}
          <Like />
        </div>
        <div
          class="
            flex flex-row
            gap-1
            font-montserrat font-bold
            text-sm text-white
            items-center
          "
        >
          {{ Comm }}
          <Comment />
        </div>
        <button
          class="
            bg-purple-400
            text-white
            font-montserrat
            text-sm
            px-2
            py-1
            grow
          "
        >
          Visiter
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import Like from "../components/icons/Like.vue";
import Comment from "../components/icons/Comment.vue";

export default {
  name: "Decouvrir",
  props: {
    Like: String,
    Comm: String,

    Nom: String,
    User: String,
    bg: String,
    pp: String,
    Description: String,
  },
  components: { Like, Comment },
};
</script>