<template>
    <div class="card">
        <div class="card-header">Deep Child Component</div>
        <div class="card-body">
            <p>static-message: {{ staticMessage }}</p>
            <p>message: {{ message }}</p>
            <p>count: {{ count }}</p>
        </div>



    </div>
</template>

<script setup>
import { inject } from 'vue';


//injecti 함수에서는 부모에서 넘어오는 값이 없을 경우를 대비하여 두번째 인자로 default 값을 받을 수 있다.
// const staticMessage = inject('static-message', default message)
const staticMessage = inject('static-message')
const { message, updateMessage } = inject('message')
updateMessage('!')
const count = inject('count')
</script>

<style lang="scss" scoped></style>