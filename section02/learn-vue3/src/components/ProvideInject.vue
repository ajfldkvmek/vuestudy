<template>
    <div class="coddntainer py-4">

        <div class="card">
            <div class="card-header">ProvideInject Component</div>
            <div class="card-body">
                <button @click="count++">Click</button>
                <p>appMessage: {{ appMessage }}</p>
                
                <Child></Child>
            </div>
        </div>
   </div>
</template>

<script setup>
import { inject, provide, readonly, ref } from 'vue';
import Child from './Child.vue';

const staticMessage = 'staticMessage'
const message = ref('message')
const count = ref(10)

const appMessage = inject('app-message')

const updateMessage = (appendMessage) => {
    message.value = message.value + appendMessage
}

//provider 에서 반응형 데이터를 제공할 경우 모든 변경은 provider 내부에서 하는 것이 좋다
//updateMessage 와 같이 해당 데이터를 가용할 수 있는 메소드를 함께 제공하는 방향으로 하자 
provide('static-message', staticMessage)
//이렇게 readonly 속성과 함께 전달하면 하위컴포넌트에서는 값을 직접 변경할 수 없다
provide('message', { message: readonly(message), updateMessage})
provide('count', count)

</script>

<style lang="scss" scoped></style>