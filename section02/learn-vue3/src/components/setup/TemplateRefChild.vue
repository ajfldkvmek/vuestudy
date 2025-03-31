<template>
    <div>
      {{ message }}
    </div>
</template>

<script>
console.log("normal script setup")
</script>

<script setup>
import { ref } from "vue"

const message = ref("hello world!")
const sayHello = () => {
    alert(message.value)
}

defineExpose({
  // message, 키 값이 같으면 이렇게 한줄로도 선언할 수 있다
  message: message,
  sayHello
})

console.log("normal script setup")

</script>

<style lang="scss" scoped>

</style>