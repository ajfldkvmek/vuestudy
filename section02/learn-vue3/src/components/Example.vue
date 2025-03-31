<template>
    <main>
        <div class="container py-4">
            <my-button class="my-button" id="my-button" @click="sayHello"></my-button> <!--  @click="sayHello" -->

            <LabelInput label="이름"></LabelInput>

            <hr />

            <FancyButton>Click <span style="color: red">span</span></FancyButton>

            <!-- default slot 을 사용할 때는 아래와 같이 사용할 수도 있따! -->
            <!-- <FancyButton v-slot="{ fancyMessage }"></FancyButton> -->

            <FancyButton>
                <template v-slot="{ fancyMessage }">
                    {{  fancyMessage }}
                </template>
            </FancyButton>


            <hr />

            <AppCard>
                <!-- <template v-slot:header>제목이여</template>
                <template v-slot:default>내용이여</template>
                <template v-slot:footer>푸터여</template> -->

                <!-- <template #header>제목이여</template> -->
                <!-- <template #default>내용이여</template> -->
                <!-- 이건 default slot 이여( 암시적으로 설정한 것! ) -->
                <!-- <template #footer>푸터여</template> -->

                <!-- <template #[slotArgs]>제모기여</template> -->

                <!-- <template #default="obj">
                    default여
                    {{ obj.childMessage }}
                    {{ obj.helloMessage }}
                </template> -->

                <template #header="{headerMessage}">
                    {{ headerMessage }}
                </template>

                <template #default="{childMessage, helloMessage}">
                    {{ childMessage }}
                    {{ helloMessage }}
                </template>

                <template #footer="{ footerMessage }">
                    {{ footerMessage }}
                </template>

            </AppCard>


            <hr />
            <AppCard>
            디폴트메시지
            </AppCard>



        </div>
    </main>
</template>

<script setup>
import MyButton from './MyButton.vue';
import LabelInput from './LabelInput.vue';
import FancyButton from './FancyButton.vue';
import AppCard from './AppCard.vue';
// import { ref } from 'vue';

// const slotArgs = ref('header');

const sayHello = () => {
    alert("ㅎㅇㅎㅇ")
}

</script>

<style lang="scss" scoped></style>