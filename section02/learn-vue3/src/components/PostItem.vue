<template>
    <div>
        <!-- 
            {{ $props }} 이렇게 props 불러올 수 도 있음: 
            props 는 단방향 바인딩되어있다.
            상위속성의 값이 변하면 하위속성에도 영향을 주지만
            하위속성의 변화는 상위속성에 영향을 주지 않는다 
            라기보다는 기본적으로 변경자체가 되지 않음 -> emit 으로 이벤트를 올려서 부모컴포넌트에서 변경하도록 해야함
        -->
        <div class="card">
            <div class="card-body">
                <!-- <span class="badge text-bg-secondary">{{ type === 'news' ? '뉴스' : '공지' }}</span> -->
                <span class="badge text-bg-secondary">{{ typeName }}</span>
                <h5 class="card-title mt-2">{{ title }}</h5>
                <p class="card-text"> {{ contents }}</p>
                <a href="#" class="btn" :class="isLikeClass">good~</a>
                <!-- <a v-if="isLike" href="#" class="btn btn-primary">좋아용</a>
                <a v-else href="#" class="btn btn-primary">노노용</a> -->
            </div>
        </div>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps({
    type: {
        type: String,
        default: 'news',
        validator: value => {
            return ['news', 'notice'].includes(value); //유효성검증 
        }
    },

    title: {
        type: String,
        required: true,
    },

    contents: {
        type: String,
        required: true,
    },

    isLike: {
        type: Boolean,
        default: false,
    },

    /*
    만약 래퍼런스 타입을 선언하고 default 값을 반환한다 하면
    obj: {
        type: Object,
        default: () => ({}) 처럼 기본값을 반환하는 함수로 작성해야한다
    }
    */
})

const isLikeClass = computed(() => 
    props.isLike ? 'btn-danger' : 'btn-outline-danger'
)

const typeName = computed(() => props.type === 'news' ? "뉘우스" : '콩지')


</script>

<style lang="scss" scoped></style>