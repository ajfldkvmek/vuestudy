<template>
  <div>
    <form action="" @submit.prevent="save(title, contents)">
      <input type="text"  v-model.lazy="title" placeholder="title"/>
      <br />
      <textarea v-model.lazy="contents" placeholder="contents"></textarea>
      
      <hr />
      <button>저장</button>
    </form>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue';

const title = ref('');
const contents = ref('');

const save = ( title, contents ) => {
  console.log(`저장되엇슴미당, title: ${title}, contents: ${contents}`)
}

watchEffect( () => {
  save(title.value, contents.value)
  console.log("title: ", title)
  console.log("contents: ", contents)
})

</script>

<style lang="scss" scoped></style>