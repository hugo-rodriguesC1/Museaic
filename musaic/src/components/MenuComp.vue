<template>
  <div class="bg-gray-800 pt-10 px-6">
    <nav class="text-white text-lg font-semibold">
      <ul class="flex flex-col items-center">
        <li>
          <router-link to="/">Accueil</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li>
          <router-link to="/musee">Musée</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li>
          <router-link to="/boutique">Boutique</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
        </li>
        <li>
          <router-link to="/compte">Compte</router-link>
          <div class="h-px bg-purple-400 w-36 my-3"></div>
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