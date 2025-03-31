<template>
  <div>

  </div>
</template>

<script setup>
import {reactive, ref,watch} from 'vue'

const x = ref(0);
const y = ref(0);

const obj = reactive({
  count: 0,
})

watch(
  () => x.value + y.value, 
  (sum) => {
    console.log("sum: ", sum)
  },
);


watch([x,y], ([newX, newY]) => {
  console.log(newX, newY)
})

//obj.count 로 하면 얘는 반응형데이터가 아니라 단순 숫자이기 때문에 이놈으로 값의 변경을 보려면
//아래 처럼 getter 를 사용하면 된다
// watch(
//   () => obj.count,
//   (newValue, oldValue) => {
//     console.log(newValue);
//   },
// );
// watch(obj, (newValue, oldValue) => {
//   //오브젝트를 가르킬 때는 new old 둘 다 같은 오브젝트를 가르키기 때문에 동일한 값이 출력됨
//   console.log('newValue:  ', newValue);
// })


const person = reactive({
  name: '홍길동',
  age: 30,
  hobby: '운동',
  obj: {
    count: 0,
  },
});

// watch(person, (newValue) => {
//   console.log('newValue: ', newValue);
// });

//하지만 getter 의 경우 해당 함수로 받은 값의 변경만 체크하기 때문에
//다른 곳에는 변경이 발생해도 이벤트 발생하지 않음
watch(
  () => person.obj,
  newValue => {
    console.log("newValue: ", newValue)
  },
);



</script>

<style lang="scss" scoped>

</style>

