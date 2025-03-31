<template>
  <div>
    <h2>{{ vue.name }}</h2>
    <h2>뷰?</h2>
    <p>{{ hasVue }}</p>
    <p>{{ existLecture }}</p>

    <button v-on:click="counter++">Counter: {{ counter }}</button>

    <h2>이름</h2>
    <p>{{ fullName }}</p>


  </div>
</template>

<script>

import { reactive, computed, ref} from 'vue'

export default {
  setup () {
   
    const vue = reactive({
      name: '뷰우우',
      lectures: ['vue', 'vue3', 'vuejs']
    })
  //  const hasVue = computed(() => {
  //     return vue.lectures.length > 0 ? '응' : 'ㄴㄴ'
  //   })
  // arrow function 은 명령어가 하나면 {}, return 생략가능 
    const hasVue = computed(() => 
      vue.lectures.length > 0 ? '응' : 'ㄴㄴ'
    )
    //아래처럼 하는 거 보다 computed 를 사용하는것이 캐시화 되기 때문에 여러번 호출된다면 성능면에서 더 좋다
    const existLecture = () => vue.lectures.length > 0 ? '응' : 'ㄴㄴ'   
    
    const counter = ref(0)
    
    const firstName = ref('진보')
    const lastName = ref('보수')
  
    const fullName = computed({
      get() {
        return firstName.value + ' ' + lastName.value
      },
      set(value) {
        [firstName.value, lastName.value] = value.split(' ')
      },

    })

    console.log('fullName:  ', fullName.value)
    // fullName.value = '보수 진보' 만약 readonly 속성인 computed 에 값을 넣고 싶다면 
    // get/set 을 사용하면 된다
    fullName.value = '보수 진보'

    return {
      vue,
      hasVue,
      existLecture,
      counter,
      fullName
    }
  }
}
</script>

<style lang="scss" scoped>

</style>