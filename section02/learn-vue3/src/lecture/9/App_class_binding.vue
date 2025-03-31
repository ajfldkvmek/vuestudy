<template>
  <div>
    <!-- v-bind:class 처럼 v-bind 는 아래와 같아 ':' 로 생략할 수 있다.-->
    <!-- <div class="text" :class="{ active: isActive, 'text-danger': hasError }">텍스트입니다</div> -->
    <!-- <div class="text" :class="classObject">텍스트입니다</div> -->
    <!-- <div class="text" :class="[activeClass, errorClass]">텍스트입니다</div> -->
    <div class="text" :class="[isActive ? 'active-class' : 'class', errorClass]">텍스트입니다</div>
    <button v-on:click="toggle">toggle</button>
    <button v-on:click="hasError = !hasError">toggleError</button>
  </div>
</template>

<script>
import { computed, reactive, ref } from 'vue';

export default {
  setup () {
   
    const isActive = ref(true);
    const hasError = ref(false);
    
    // const classObject = reactive({
    //   active: true,
    //   'text-danger': true,
    // })

    const classObject = computed(() => {
      return {
        active: true,
        'text-danger': true,
      };
    });

    const activeClass = ref('active');
    const errorClass = ref('error');

    const toggle = () => {
      isActive.value = !isActive.value
    }
    
    
    return {
      isActive, hasError,
      toggle, classObject,
      activeClass, errorClass,
    }
  }
}
</script>

<style scoped>
  .active {
    font-weight: 900;
  }

  .text-danger {
    color: red 
  }
</style>