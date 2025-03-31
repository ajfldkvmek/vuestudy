<template>
    <main>
        <div class="container py-4">
            <PostCreate @create-post="createPost" />
            <div class="container text-center">
                <div class="row g-3">
                    <div v-for="post in posts" :key="post.id" class="col col-4">
                        <!-- <AppCard :title="post.title" :contents="post.contents"></AppCard> -->
                        <app-card :title="post.title" :contents="post.contents" :is-like="post.isLike"
                            :type="post.type">
                        </app-card>
                        <button @click="post.isLike = !post.isLike">toggle</button>
                    </div>
                </div>
                <!-- <div class="row g-3">
                <div class="col col-4">
                    <AppCard title="제목1" contents="내용1"></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard :title="post.title" :contents="post.contents"></AppCard>
                </div>
                <div class="col col-4"> -->
                <!-- <AppCard></AppCard> -->
                <!-- 
                        컴포넌트로 만들어주면 아래와 같이 파스칼케이스로도 사용가능하다
                     -->
                <!-- <app-card /> -->
                <!-- </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
                <div class="col col-4">
                    <AppCard></AppCard>
                </div>
            </div> -->



                <hr class="my-4" />
                <!-- <LabelInput
            :model-value="userName"
            @update:model-value="value => (userName = value)"
           ></LabelInput>  -->

                <!--
            non-prop 속성
            만약 자식 성포넌트 루트요소에 이미 class와 style속성이 정의되어 있으면, 부모로 받은 class와 style속성과 병합된다.

            그 외의 속성은 상관x

            v-on 이벤트 리스너의 경우에도 상속된다
           -->
                <LabelInput v-model="userName" label="이름" class="parent-class" style="color: red" id="parent-id">
                </LabelInput>

                <!-- <LabelTitle
            v-model:title="userTitle"
            label = "제목"
           ></LabelTitle>

            <UserName
                v-model:firstname="firstname"
                v-model:lastname="lastname"
            ></UserName> -->

            </div>
        </div>

    </main>

</template>

<script setup>
import AppCard from '@/components/PostItem.vue';
import PostCreate from '@/components/PostCreate.vue';
import LabelInput from '@/components/LabelInput.vue'
// import LabelTitle from '@/components/LabelTitle.vue';
// import UserName from './UserName.vue';

import { reactive, ref } from 'vue';

// const post = reactive({
//     title: '제목2',
//     contents: '내용2',
// })

const posts = reactive([
    { id: 1, title: '제목1', contents: '내용1', isLike: true, type: 'news' },
    { id: 2, title: '제목2', contents: '내용2', isLike: true, type: 'news' },
    { id: 3, title: '제목3', contents: '내용3', isLike: true, type: 'news' },
    { id: 4, title: '제목4', contents: '내용4', isLike: false, type: 'notice' },
    { id: 5, title: '제목5', contents: '내용5', isLike: false, type: 'notice' }
])
const userName = ref('')
// const userTitle = ref('');

// const firstname = ref('');
// const lastname = ref('');

const createPost = (newPost) => {
    console.log("createPost", newPost)
}




</script>

<style lang="scss" scoped></style>