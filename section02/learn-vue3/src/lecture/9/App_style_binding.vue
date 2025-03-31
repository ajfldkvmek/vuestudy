<template>
  <div>
      <div :style="styleObject">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. 
        Corrupti repudiandae, magni id quo aliquam pariatur, 
        commodi nemo mollitia libero excepturi, nihil quam. 
        Obcaecati tempore fugiat molestias minima voluptatum? Dolorem, quae.
      </div>
  </div>
      <button v-on:click="fontSize--">-</button>
      <button v-on:click="fontSize++">+</button>
</template>

<script>
import { reactive, computed, ref } from 'vue';

export default {
  setup () {
   
    // const styleObject = reactive({
    //   color: 'red',
    //   fontSize: '13px',
    // })

    const fontSize = ref(13);

    const styleObject = computed(() => {
      return {
        color:"red",
        fontSize: fontSize.value +"px",
      }
    })

    return {
      styleObject,
      fontSize
    }
  }
}
</script>

<style lang="scss" scoped>

</style>