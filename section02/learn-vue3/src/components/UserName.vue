<template>
    <div>
        <LabelInput :model-value="firstname" 
                    @update:model-value="value => $emit('update:firstname', value)" 
                    label="성" />

        <LabelInput :model-value="lastname" 
                    @update:model-value="value => $emit('update:lastname', value)" 
                    label="이름" />
    </div>
</template>

<script setup>
import LabelInput from './LabelInput.vue';

const props = defineProps({
  firstname: String,
  lastname: String,
});

const emit = defineEmits(['update:firstname', 'update:lastname']);

// const updateFirstname = (value) => {
//   emit('update:firstname', value);
// };

// const updateLastname = (value) => {
//   emit('update:lastname', value);
// };


</script>

<style lang="scss" scoped>

</style>