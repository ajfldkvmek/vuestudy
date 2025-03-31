<template>
  <div>
    <p>{{ msg }}</p>
    <p v-text="msg"></p>
    <p v-html="htmlStr"></p>
    <p v-text="htmlStr"></p>
    <p v-pre>{{ msg ㅎㅇㅎㅇ }}</p>
    <!-- v-once는 한번만 랜더링된다 -->
    <p v-once>{{ msg }} !!!</p>


    <!-- 
    v-memo 는 vue3에서 추가된 태그
    
    -->

  </div>
</template>

<script>

import { ref } from 'vue';

export default {
  setup () {
   
    const msg = ref('ㅎㅇㅎㅇ');
    const htmlStr = ref('<strong>ㅎㅇ!!!!!!!!!</strong>')

    return {msg, htmlStr}
  },
};
</script>

<style lang="scss" scoped>

</style>