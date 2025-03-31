<template>
  <div>
    <h2>반응형 메세지</h2>
    <p>{{  reaactiveMessage }}</p>
    <button v-on:click='addReactiveMessage'>Add Message</button>
    

    <h2>일반 메세지</h2>
    <p>{{ normalMessage }}</p>
    <button v-on:click='addNormalMessage'>Add Message</button>

  </div>
</template>

<script>

  import { ref } from 'vue';

  export default {
    setup() {
      const reaactiveMessage = ref('Hello reactiveMessage');
      const normalMessage = 'Hello Normal Message';

      const addReactiveMessage = () => {
        reaactiveMessage.value = reaactiveMessage.value + '!';
      };
      const addNormalMessage = () => {
        normalMessage.value = normalMessage.value + '!';
      };
      return {
        reaactiveMessage,
        normalMessage,
        addReactiveMessage,
        addNormalMessage, //이 버튼은 아무 반응이 없는 것을 확인할 수 있는데 이는 normalMessage 가 반응형으로 선언된 변수가 아니기 때문에 제대로 수행되지 않음
      };
    },
};
</script>
<style lang="scss" scoped>
</style>