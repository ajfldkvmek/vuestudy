<template>
  <div>

  </div>
</template>

<script setup>
import {ref,watch} from 'vue'
const message = ref('');

watch(message, (newValue, oldValue) => {
   console.log("newValue:  ", newValue)
   console.log("oldValue:  ", oldValue)
})
</script>

<style lang="scss" scoped>

</style>

