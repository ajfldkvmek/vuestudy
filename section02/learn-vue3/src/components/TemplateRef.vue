<template>
    <div class="container py-4">
        <input ref="input" type="text">
        <p v-if="input">{{ input.value }}</p>
        <p v-if="input">{{ $refs.input.value }}</p>
    </div>

    <hr />

    <ul>
        <!-- <li v-for="fruit in fruits" :key="fruit" ref="itemRefs" >{{ fruit }}</li> -->
        <li v-for="fruit in fruits" :key="fruit" :ref="(el) => itemRefs.push(el.textContent)" >{{ fruit }}</li>
    </ul>

    <hr />

    <TemplateRefChild ref="child"></TemplateRefChild>

</template>

<script setup>
import { onMounted, ref } from 'vue';
import TemplateRefChild from './TemplateRefChild.vue';

const input = ref();
const fruits = ref(['a', 'b', 'c'])
const itemRefs = ref([]);
onMounted(() => {
    //input 은 mount 되기 전까지 null 이다
    input.value="Hello!"
    console.log("onMounted ", input.value)

    // itemRefs.value.forEach(item => {
    //     console.log(ite.textContent)
    // });


    itemRefs.value.forEach(item => {
        console.log('item', item)
    });

    console.log("child.message", child.value.message)
    child.value.sayHello();
})

const child =ref(null)

</script>

<style lang="scss" scoped>

</style>