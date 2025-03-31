<template>
  <div>
    <h2 v-if="visible">Hello Vue3</h2>
    <h2 v-else>Vue3 Hello</h2>
    <button v-on:click="visible = !visible">toggle</button>

    <hr />

    <button v-on:click="type = 'a'">a</button>
    <button v-on:click="type = 'b'">b</button>
    <button v-on:click="type = 'c'">c</button>
    <button v-on:click="type = 'not'">not</button>
    

    <h2 v-if="type === 'a'">it's a</h2>
    <h2 v-else-if="type === 'b'">it's b</h2>
    <h2 v-else-if="type === 'c'">it's c</h2>
    <h2 v-else>it's not a, b, c </h2>

    <!-- 조건부 랜더링은 tempalte에도 적용이 가능하다-->
    <template v-if="visible">
      <h1>Title</h1>
      <p>Paragraph1</p>
      <p>Paragraph2</p>
    </template>

    <hr />

    <!--
    `v-if`는 "실제(real)"로 렌더링된다.
    전환 할 때 블록 내부의 컴포넌트들이 제거되고 다시 생성된다. -> 전환비용이 높음 또한 게으르다(lazy). 
    초기 렌더링 시, 조건이 false 이면 아무 작업도 하지 않는다.(조건부 블록은 true가 될 때까지 렌더링되지 않음.)


    `v-show`는 훨씬 간단히다. 
    엘리먼트는 CSS 기반 전환으로 항상 렌더링된다. -> 초기 랜더링 비용이 높음
    (v-show는 엘리먼트를 DOM에 우선 렌더링하고 조건에 따라 CSS display:block/display:none 속성을 전환한다.)

    그러므로 무언가를 자주 전환해야 한다면 `v-show`를 사용, 
    런타임 시 조건이 변경되지 않는다면 `v-if`를 사용
    -->

    <h1 v-show="ok">show toggle</h1>
    <button v-on:click="ok = !ok">show toggle</button>



  </div>
</template>

<script>

import { ref } from 'vue'

export default {
  setup () {
   
    const visible = ref(true)

    const type = ref('a')

    const ok = ref(true)

    return {
      visible,
      type,
      ok,
    }
  }
}
</script>

<style lang="scss" scoped>

</style>