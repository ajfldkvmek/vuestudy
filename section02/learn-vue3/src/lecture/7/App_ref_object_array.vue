<template>
  <div>

  </div>
</template>

<script>
import {reactive, ref} from 'vue'
export default {
  setup () {

    //반응형 상태라면 .value 없어도 자동 래핑되어 그냥 변수명만 써도 됨
    //하지만 반응형을 다른 형태(ex. Array)로 변환해주었을 경우 반드시 .value 필요

    //ref -> object
    const count = ref(0)
    const state = reactive({
      count,
    });
    console.log('count.value', count.value)
    console.log('state.count', state.count) // reactive 로 선언된 변수는 .value가 자동으로 wrapping 된다
    
    // ref -> array
    const message = ref('Hello');
    const arr = reactive([message])
    console.log('arr[0]', arr[0].value)
    
    return {
      count,
      state
    }
  }
}
</script>

<style lang="scss" scoped>

</style>