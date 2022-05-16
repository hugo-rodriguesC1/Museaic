<template>
  <div class="bg-gray-800 w-40 h-screen absolute inset-0 -z-10 pt-20 px-6">
    <nav class="text-white text-lg font-semibold">
      <ul class="flex flex-col items-start">
        <li>
          <router-link to="/">Accueil</router-link>
          <div class="h-px bg-purple-400 w-28 my-3"></div>
        </li>
        <li>
          <router-link to="/musee">Musée</router-link>
          <div class="h-px bg-purple-400 w-28 my-3"></div>
        </li>
        <li>
          <router-link to="/boutique">Boutique</router-link>
          <div class="h-px bg-purple-400 w-28 my-3"></div>
        </li>
        <li>
          <router-link to="/compte">Compte</router-link>
          <div class="h-px bg-purple-400 w-28 my-3"></div>
        </li>
      </ul>
    </nav>
  </div>
</template>

<script >
import Logo from "./icons/Logo.vue";
import Account from "./icons/Account.vue";
import Bell from "./icons/Bell.vue";

export default {
  components: { Logo, Bell, Account },
};
</script>