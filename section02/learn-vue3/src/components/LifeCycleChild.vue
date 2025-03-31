<template>
    <div class="card">
        <div class="card-body">LifeCycle Child</div>
    </div>
</template>

<script setup>
import { onBeforeMount, onBeforeUnmount, onMounted, onUnmounted } from 'vue';

onBeforeMount(() => {
    console.log("Child onBeforeMounted")
})
onMounted(() => {
    console.log("Child onMounted")
})

onBeforeUnmount(() => {
    console.log("Child onBeforeUnmount") 
})
onUnmounted(() => {
    console.log("Child onUnmounted") 
})
</script>

<style scoped>

</style>