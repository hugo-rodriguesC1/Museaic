<template>
  <div class="bg-gray-800 p-4 col-span-2 row-span-2">
    <h2 class="font-semibold text-purple-400">{{ title }}</h2>
    <div class="w-32 h-px bg-white"></div>
    <slot></slot>
  </div>
</template>

<script >
export default {
  props: {
    title: String,
  },
};
</script>