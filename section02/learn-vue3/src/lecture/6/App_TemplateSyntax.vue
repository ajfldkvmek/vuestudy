<template>
  <div>
    <h2> 보간법 </h2>
    <p>{{ message }}</p>
    <p v-once>{{ message }}</p>
    <button v-on:click="message = message + '!'">Click!</button>
    <hr />

    <h2>HTML</h2>
    <p> {{ rawHtml }}</p>
    <p v-html="rawHtml"></p> <!-- html 태그를 적요한 html 문자열을 출력하려면 v-html 을 선언해준다 -->
    <hr />

    <h2>속성 바인딩</h2>
    <div title="마우스 오버시 나타나는 타이틀">마우스 올려보셈</div>
    <div v-bind:title="dynamicTitle">마우스 올려버셈ㅋㅋ</div>

    <input input="text" value="boolean 속성 넣기" v-bind:disabled="isInputDisabled">
    <br>
    <span>v-bind='object: '</span><input v-bind="attrs"><br>
    <span>:(v-bind): </span><input :="attrs">

    <h2>JavaScript 사용하기</h2>
    {{ message.split('').reverse().join('') }}


  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {
    setup() {
      const message = ref('안녕하세요')
      const rawHtml = ref('<strong>ㅎㅇㅎㅇ</strong>')
      const dynamicTitle = ref('ㅎㅇㅎㅎㅇ!!!!!!!!!!!!!!')
      const isInputDisabled = ref(false);

      const attrs = ref({
        type: 'password',
        value: '123123',
        disabled: false
      })

      return {
        message,
        rawHtml,
        dynamicTitle,
        isInputDisabled,
        attrs
      }
    }
  }
</script>

<style lang="scss" scoped>

</style>