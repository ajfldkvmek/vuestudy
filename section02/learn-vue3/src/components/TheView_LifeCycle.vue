<template>
    <main>
        <LifeCycleHook></LifeCycleHook>
    </main>
</template>

<!-- 
Composition API에서 라이프사이클 훅은 메서드로 정의하지 않고 함수로 호출한다.
따서 Options API 스타일을 사용해야 한다면, 
<script setup>에서 setup을 제거하고 전통적인 형식을 사용해야 합니다:
-->
<!-- <script>
import LifeCycleHook from './LifeCycleHook.vue';

export default {
  components: {
    LifeCycleHook
  },
  beforeCreate() {
    console.log("beforeCreate")
  },
  created() {
    console.log("created") 
  }
}
</script> -->
<!-- 
Vue 3에서 Composition API(<script setup>)를 사용할 때는 Options API 스타일의 라이프사이클 메서드인 
beforeCreate()와 created()를 <script setup> 블록 내에서 직접 사용할 수 없다.
따라서 Composition API 라이프사이클 훅인 onBeforeMount와 onMounted를 사용해야한다
-->
<script setup>

// import { onBeforeMount, onMounted } from 'vue';
import LifeCycleHook from './LifeCycleHook.vue';

// // Composition API에서는 이런 훅을 대신 사용합니다
// onBeforeMount(() => {
//     console.log("beforeCreate 대응 onBeforeMount")
// });

// onMounted(() => {
//     console.log("created 대응 onMounted")
// });


</script>

<style scoped></style>