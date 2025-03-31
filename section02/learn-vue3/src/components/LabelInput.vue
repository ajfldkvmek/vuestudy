<template>
    <div>
        <label class="orm-label" id="child-id">
                {{ label }}
                <!-- <input v-model="userName" type="text" />
                 -->
                <!--
                와 같다
        -->
                <!-- <input
                    :value="value"
                    @input="event => $emit('update:modelValue', event.target.value)"
                    type="text"
                />  -->
            </label>
            <input v-model="value" v-bind="$attrs" type="text" class="form-control" />
    </div>
</template>

<script setup>
import { computed } from 'vue';

const props = defineProps(['modelValue', 'label'])

const emit = defineEmits(['update:modelValue'])

const value = computed({
    get() {
        return props.modelValue
    },

    set(newValue) {
        emit('update:modelValue', newValue)
    },
});

</script>

<style lang="scss" scoped>

</style>