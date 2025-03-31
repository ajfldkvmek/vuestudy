<template>
  <div>
   <!-- 
    이벤트 수식어(Modifiers)
    이벤트를 조작할 때 이벤트 내부에서 event.preventDefault() 
    또는 event.stopPropagation() 메서드를 호출할 수 있지만 비효율적임

    이 문제를 해결하기 위해 Vue는 v-on 이벤트에 다양한 이벤트 수식어(Modifiers)를 제공

    - `.stop` = `e.stopPropagation()` - 클릭 이벤트 버블링 중단
    - `.prevent` = `e.preventDefault()` - 제출 이벤트 중단
    - `.capture` = 캡처 모드를 사용할 때 이벤트 리스너를 사용 가능합니다.
    - `.self` = 오로지 자기 자신만 호출할 수 있다. 즉, 타깃요소가 `self`일 때 발동된다.
    - `.once` = 해당 이벤트는 **한 번만** 실행된다.
    - `.passive` = 일반적으로 모바일 장치의 성능을 개선하기 위해 터치 이벤트 리스너와 함께 사용
    (https://developer.mozilla.org/en-US/docs/Web/API/EventTarget/addEventListener#improving_scrolling_performance_with_passive_listeners)
    -->
   
    <div id="modifiers">
      <div @click="clickDiv">
        DIV 영역
        <p @click="clickP">
          P 영역
          <span @click.stop="clickSpan">
            SPAN 영역
          </span> 
          <a href="www.naver.com" @click.prevent.stop="clickA">A태그</a>
        </p>
      </div>
    </div>
    <!-- <a href="#" @click.prevent.stop="clickA">A태그</a> -->
  </div>
</template>

<script>
export default {
  setup() {
    const clickDiv = () => {
      console.log('clickDiv')
    };

    const clickSpan = () => {
      console.log('clickSpan')
    };

    const clickP = () => {
      console.log('clickP')
    };

    const clickA = () => {
      alert("으아앙")
    }
    return {
      clickDiv, clickSpan, clickP, clickA
    }
  }
}
</script>

<style scoped>
#modifiers div,
#modifiers p,
#modifiers span {
  padding: 40px;

}

#modifiers div {
  background-color: #ccc;
}

#modifiers span {
  background-color: #666;
  display: block;
}

#modifiers p {
  background-color: #999;
}
</style>