<template>
  <div>

  </div>
</template>

<script>
import { reactive, readonly } from 'vue';

export default {
  setup () {
    const original = reactive({
      count: 0,
    })

    const copy = readonly(original)
    original.count++;
    // copy.count++; 이놈은 readonly 이기 때문에 변경을 못함
    console.log('original: ', original.count)
    console.log('copy: ', copy.count)
    return {}
  }
}
</script>

<style lang="scss" scoped>

</style>