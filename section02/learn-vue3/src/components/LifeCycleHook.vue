<template>
    <div class="container py-4">
        <input ref="inputRef" type="text" value="hello world!">
        <button @click="visible = !visible">Toggle Child</button>
        <LifeCycleChild v-if="visible"></LifeCycleChild>
        <p id="message">{{ message }}</p>
    </div>
</template>

<script setup>
import { ref } from 'vue';
import LifeCycleChild from './LifeCycleChild.vue';
const inputRef = ref(null)
const message = ref('')
const visible = ref(false)

</script>

<style scoped>

</style>