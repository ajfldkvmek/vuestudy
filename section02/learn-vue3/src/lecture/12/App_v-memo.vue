<template>
  <div>
    <!-- v-memo는 성능최적화를 위해 사용한다.
      v-memo 로 지정한 값에 변동이 없으면 반응형 데이터라도 변하지 않고
      해당 조건을 만족하였을 때 그동한 변경되었던 모든 값들이 한번에 갱신된다.
    -->
    <div v-memo="[subscribers]">
      <p>subscriber: {{ subscribers }}</p>
      <p>views: {{ views }}</p>
      <p>likes: {{ likes }}</p>
    </div>
    <!-- v-on 은 단축태그로 @로 사용할 수 있다. -->
    <button @click="subscribers++">subs++</button>
    <button @click="views++">views++</button>
    <button @click="likes++">likes++</button>
  </div>
  <div>
    <p>subscriber: {{ subscribers }}</p>
    <p>views: {{ views }}</p>
    <p>likes: {{ likes }}</p>
  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup() {

    const subscribers = ref(4000);
    const views = ref(400);
    const likes = ref(40);

    return {
      subscribers, views, likes
    }
  }
}
</script>

<style lang="scss" scoped></style>
