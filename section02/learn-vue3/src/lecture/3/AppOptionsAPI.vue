<template>
  <div>
      <button>Counter: {{ counter }}</button>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        counter: 0,
      }
    },
    methods: {
       increment() {
        this.counter++;
       }
    },

    mounted() {
      console.log("component is mounted")
    }
  }
</script>

<style lang="scss" scoped>

</style>
