<template>
  <p
    class="text-bluePrimary cursor-pointer hover:bg-darkerGrey transition-colors duration-300 hover:text-white text-sm bg-white text-center px-5 py-1 rounded-2xl"
  >
    {{ text }}
  </p>
</template>
<script>
export default {
  props: ['text']
}
</script>
<style>
</style>