<template>
    <div class="container py-4">
        <p>{{ msg }}</p>
        {{ message }}
        <PostItem
            type="news"
            title="제목"
            contents="내용"
            :is-like="true"
        ></PostItem>

        <hr />
        <TemplateRefChild></TemplateRefChild>
        <template v-if="child">{{ child.message }}
        </template>

        <MyButton class="parent-class"></MyButton>
    </div>
</template>

<script setup>
import { ref } from 'vue'
import PostItem from '@/components/setup/PostItem.vue';
import TemplateRefChild from './setup/TemplateRefChild.vue';
import MyButton from './setup/MyButton.vue';
// import axios from 'axios';


const msg = "hello world"
const message = ref('asd')

// 이 부분은 수정이 좀 필요함
// const response = await axios('http://dummy.restapiexample.com/api/v1/employees')
// console.log(response)
</script>

<style lang="scss" scoped>
</style>