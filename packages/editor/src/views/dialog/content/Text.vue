<template>
    <div class="extend__text" :style="styleObject">
        {{ props.text }}
    </div>
</template>
<script setup lang="ts">
import { computed } from "vue";

const props = defineProps({
    text: {
        type: String,
        default: '',
    },
    textColor: {
        type: String,
        default: '',
    },
    height: {
        type: String,
        default: '',
    }
})

console.log('xxxxxxxxxxxxx: ', props)

const styleObject = computed(() => {
    return {
        color: props.textColor,
        height: props.height,
    }
})

</script>