<template>
    <div class="container py-4">
        <div class="btn-group" role="group">
            <button 
                v-for="(comp, name) in components" 
                :key="name"
                class="btn" 
                :class="currentComp === comp ? 'btn-primary' : 'btn-outline-secondary'"
                @click="changeCurrentComp(comp)"
            >
                {{ name }}
            </button>
        </div>
        
        <hr />
        <component :is="currentComp" />
    </div>
</template>

<script setup>
import { ref } from 'vue'
import { markRaw } from 'vue'
import DynamicApple from './DynamicApple.vue'
import DynamicBerry from './DynamicBerry.vue'

// 컴포넌트들을 객체로 관리
const components = {
    사과: markRaw(DynamicApple),
    딸기: markRaw(DynamicBerry)
}

// 초기 컴포넌트를 명시적으로 지정
const currentComp = ref(components.사과)

// 컴포넌트 변경 함수
const changeCurrentComp = (comp) => {
    currentComp.value = comp
}
</script>

<!-- 
markRaw()나 shallowRef() 를 사용하는 것이 더 효과적이다

markRaw(): 컴포넌트를 완전히 반응형 시스템에서 제외

shallowRef(): 참조 자체만 반응형으로 관리하고, 내부 깊은 구조는 반응형 추적하지 않음
하지만 value 에 대해서는 반응하지만 속성에 대한 변경에는 반응하지 않는다

<template>
    <div class="container py-4">
        <button class="btn btn-primary" @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBerry)">딸기</button>
        
        <hr />
        <component :is="currentComp" />
    </div>
</template>
<script setup>
import { ref } from 'vue'
import { markRaw } from 'vue'
import DynamicApple from './DynamicApple.vue'
import DynamicBerry from './DynamicBerry.vue'

const currentComp = ref(markRaw(DynamicApple))
const changeCurrentComp = comp => (currentComp.value = markRaw(comp))
</script>



<template>
    <div class="container py-4">
        <button class="btn btn-primary" @click="changeCurrentComp(DynamicApple)">사과</button>
        <button class="btn btn-danger" @click="changeCurrentComp(DynamicBerry)">딸기</button>
        
        <hr />
        <component :is="currentComp" />
    </div>
</template>
<script setup>
import { shallowRef } from 'vue'
import DynamicApple from './DynamicApple.vue'
import DynamicBerry from './DynamicBerry.vue'

const currentComp = shallowRef(DynamicApple)
const changeCurrentComp = comp => (currentComp.value = comp)
</script>

-->