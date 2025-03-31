<template>
  <div>

    <h2>input value</h2>
    <!-- 
      v-model 수식어

     .lazy 를 사용하게 되면 
      매 이벤트 마다 동기화가 발생하는 것이 아니라 이벤트가 끝나면 동기화가됨
      ex. 키보드 입력시마다 값이 바뀌는 것이 아니라
          포커스가 바뀌면 그때 반영됨

      .number 를 사용하게되면 형변환을 알아서 해줌
      -> 수식 계산을 할 때 사용

      .trim 데이터가 동기화 될 때 공백제거
    -->
    <input type="text" v-model.lazy="inputValue" />
    <!-- <input type="text" :value="inputValue" 
    @input="event => (inputValue = event.target.value)" 
    /> -->
    <div>{{ inputValue }}</div>

    <h2>textarea value</h2>
    <textarea v-model="textareaValue"></textarea>
    <div>{{ textareaValue }}</div>

    <h2>checkbox value</h2>
    <label for="checkbox">{{ checkboxValue }}</label>
    <input type="checkbox" id="checkbox" v-model="checkboxValue" />

    <h2>radio value</h2>
    <label>
      <input type="radio" name="type" value="o" v-model="radioValue"> o형
    </label>
    <label>
      <input type="radio" name="type" value="a" v-model="radioValue"> a형
    </label>
    <label>
      <input type="radio" name="type" value="b" v-model="radioValue"> b형
    </label>
    <label>
      <input type="radio" name="type" value="ab" v-model="radioValue"> ab형
    </label>
    <div>
      {{ radioValue }}
    </div>
    
    <h2>select value</h2>
    <select v-model="selectValue">
      <option value="html">HTML</option>
      <option value="css">CSS</option>
      <option value="vue">VUE</option>
    </select>
    <div>
      {{ selectValue }}
    </div>

    <h2>checkboxValues</h2>
    <label>
      <input type="checkbox" value="html" v-model="checkboxValues">HTML
    </label>
    <label>
      <input type="checkbox" value="css" v-model="checkboxValues">CSS
    </label>
    <label>
      <input type="checkbox" value="vue" v-model="checkboxValues">VUE
    </label>
    <div>{{ checkboxValues }}</div>
  </div>
</template>

<!-- <script>
import { ref } from 'vue';

export default {
  setup () {
    const inputValue = ref('');

    return {
      inputValue,

    }
  }
}
</script> -->


<!-- 
  vue3 부터는 아래와 같이 script setup 을 사용하여 컴포넌트를 개발하는 추세
  이는 코드의 간결성과 컴파일 성능최적화 런타임성능 개선을 제공함(import 한 컴포넌트 자동등록)
  props 와 emits 의 정의가 더 간단해짐
  // 기존 방식
  export default {
    props: ['title'],
    emits: ['change'],
    setup(props, { emit }) {
      // ...
    }
  }

  // script setup 방식
  <script setup>
  const props = defineProps(['title'])
  const emit = defineEmits(['change'])
  </script>
  
  추가로 더 높은 TypeScript 지원성
-->
<script setup>
import { ref } from 'vue';
const inputValue = ref('');
const textareaValue = ref('');
const checkboxValue = ref(true);
const radioValue = ref('o');
const selectValue = ref('html')
const checkboxValues = ref([])
</script>



<style lang="scss" scoped></style>