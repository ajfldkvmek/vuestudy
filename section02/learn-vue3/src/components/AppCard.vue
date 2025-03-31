<template>
    <div class="card">
       <!-- 이렇게 v-if 를 사용하여 부모 컴포넌트에서 특정 슬롯만 사용할 수도 있음 -->
        <div v-if="$slots.header" class="card-header">
            <slot name="header" header-message="헤더메세지">#header</slot>
        </div>

        <div v-if="$slots.default" class="card-body">
            <slot child-message="childMessage"
                    hello-message="안녕하시지">#body</slot>
        </div>

        <div  v-if="$slots.footer" class="card-footer text-body-secondary">
            <slot name="footer" footer-message="푸터메세지">#footer</slot>
        </div>
    </div>
</template>

<script setup>
import { ref } from 'vue';


const childMessage = ref('자식 내용이여')
</script>

<style lang="scss" scoped></style>