<template>
    <div class="row g-3">

        <div class="col col-2">
            <select v-model="type" class="form-select" aria-label="Default select example">
            <option value="news">news</option>
            <option value="notice">notice</option>
        </select>
        </div>
        <div class="col col-8">
            <input type="text" class="form-control" v-model="title">
        </div>
        <div class="col col-2 d-grid">
            <button class="btn btn-primary" @click="createPost">추가</button>
        </div>
        <!-- emit 과 함께 파라메터도 넘길 수 있음 -->
        <!-- <button class="btn btn-primary" @click="$emit('createPost', 1, 2, 3, '뷰!')"></button> -->

    </div>
</template>


<!-- 
이전 방식
<script>
export default {
  emits: {
		// 유효성 검사가 없는 이벤트 선언
		someEvent: null,

		// 유효성 검사가 있는 이벤트 선언
		someSubmit: (result) => {
			if (email && password) {
	      return true
	    } else {
	      console.warn('result 값이 비어있습니다!')
	      return false
	    }
		}
	},
  setup(props, context) {
    context.emit('someEvent', 'Hello World!')
  }
}
</script> 
-->

<script setup>
import { ref } from 'vue'

//아래와 같은 방법은 이제 권장되지 않는 방법
// emits: {
//     createPost: title => {
//         console.log(title)
//         if(title) return false
//         return true
//     }
// }
// const emit = defineEmits(['createPost'])
const title = ref('')

//아래처럼 객체형태로 선언할 경우 validation 설정도 가능하다
const emit = defineEmits({

    createPost: (newPost) => {
        // if(typeof a !== 'number'){
        //     return false
        // }

        // if(typeof b !== 'number'){
        //     return false
        // }

        // if(typeof c !== 'number'){
        //     return false
        // }

        // if(typeof d !== 'string'){
        //     return false
        // }
        if (!newPost.title || !newPost.type) return false
        return true;
    }

})
// const emit = defineEmits(['createPost'])
const createPost = () => {

    const newPost = {
        type: type.value,
        title: title.value,
    }
    emit('createPost', newPost)

    type.value = 'news'
    title.value = 's'
}

const type = ref('news')

</script>

<style lang="scss" scoped></style>