import { createApp } from 'vue'
import App from './lecture/App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'

import AppCard from './components/PostItem.vue'

const app = createApp(App)

app.provide('app-message', 'app message 입니다')

//globalProperties 는 전역적으로 사용가능
// app.config.globalProperties.msg = 'hello'

app.component('AppCard', AppCard) 
//이렇게 전역으로 등록된 컴포넌트는 프로젝트 전체에서 사용 가능
//하지만 Vite 같은 빌드시스템을 사용하면 컴포넌트를 사용하지 않더라도 계속 빌드에 해당 컴포넌트가 포함됨
//-> 프로젝트의 크키가 커지고 컴포넌트간 종속관계를 확인하기 어려워진다
app.mount('#app')
import 'bootstrap/dist/js/bootstrap.bundle.min.js'