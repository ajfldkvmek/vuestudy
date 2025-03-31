<template>

  <!-- 
    v-for 는 iterator 속성 뿐 아니라 객체도 출력할 수 있다.
    객체를 v-for 로 출력하게 되면
    객체내의 필드값들을 순서대로 출력한다.
  -->

  <div>
    <ul>
      <template v-for="item in evenItems" :key="item.id">
        <li>
          {{ item.id }}: {{ item.message }}
        </li>
      </template>

      <!-- <template v-for="item in items" :key="item.id">
        <li v-if="item.id % 2 == 0">
        {{ item.id}}: {{ item.message }}
      </li> 
      </template> -->

    </ul>
  </div>
</template>

<script>

import { reactive, computed } from 'vue';

export default {

  setup() {

    const items = reactive([
      { id: 1, message: 'Java' },
      { id: 2, message: 'HTML' },
      { id: 3, message: 'CSS' },
      { id: 4, message: 'JavaScript' },
    ]);

    const evenItems = computed(
      () => items.filter(item => item.id % 2 === 0)
    );


    return {
      items,
      evenItems,
    };
  }
}

</script>

<style lang="scss" scoped></style>