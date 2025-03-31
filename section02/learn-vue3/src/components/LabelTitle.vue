<template>
    <div>
        <label>
            {{ label }}
            <input v-model="value" type="text" />
        </label>
    </div>
</template>

<script setup>
import { computed } from 'vue';


const props = defineProps(['title', 'label'])
const emit = defineEmits(['update:title'])

const value = computed({
    get() {
        return props.title
    },

    set(newValue) {
        emit('update:title', newValue)
    },
});

</script>

<style lang="scss" scoped></style>