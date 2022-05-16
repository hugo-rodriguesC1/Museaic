<template>
  <div class="bg-gray-800 w-36 h-screen absolute inset-0 -z-10">
    <nav class="mt-16 ml-4 text-white">
      <ul>
        <li><RouterLink to="/">Accueil</RouterLink></li>
        <li><RouterLink to=""></RouterLink></li>
        <li><RouterLink to=""></RouterLink></li>
        <li><RouterLink to=""></RouterLink></li>
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