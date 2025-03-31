<template>
    <div class="p-3 bg-danger">
        <button class="btn btn-primary" type="button" @click="sayHello">My Button</button>
        <!-- v-bind="$attrs" -->
    </div>
</template>


<script>
// 이벤트 상속 방지를 위해선 이렇게 추가적인 스크립트 작성이 필요함
export default {
    // inheritAttrs: false
}
</script>


<script setup>

const emit = defineEmits(['click']);

const sayHello = () => {
    emit('click')
}
</script>

<style lang="scss" scoped></style>