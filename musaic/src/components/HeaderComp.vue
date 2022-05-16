<template>
  <div class="bg-gray-800 h-16 flex items-center px-4 justify-between">
    <Logo />
    <div class="flex items-center relative">
      <Bell />
      <div
        class="
          flex
          items-center
          justify-center
          w-16
          h-5
          bg-purple-700
          text-white text-xs
        "
      >
        650
      </div>
      <Account />
    </div>
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