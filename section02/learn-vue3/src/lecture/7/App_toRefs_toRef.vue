<template>
  <div>
    <p>author: {{ author }}</p>
    <p>title : {{ title }}</p>
  </div>
</template>

<script>
import { reactive, toRefs, toRef } from 'vue'

export default {
  setup () {
  const book = reactive({
    author: 'Vue Team',
    year: '2020',
    title: 'Vue 3 Guide',
    description: '당신은 이 책을 지금 바로 읽습니다 ;)',
    price: '무료'
  })
 
  //구조분해를 하게되면 반응형이 아니게 되어 수정이 불가능하게 된다.
  //그럼 이 문제를 해결하려면 어떻게??? -> toRef or toRefs 를 사용하면 된다.
  // const {author, title } = book;
  // const {author, title} = toRefs(book)
  const author = toRef(book, 'author')
  const title = toRef(book, 'title')

    return {
       author, title , book
    }
  }
}
</script>

<style lang="scss" scoped>

</style>