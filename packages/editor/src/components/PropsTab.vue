<template>
    <t-tabs v-model:value="activePanel" @change="changeValue">
        <t-tab-panel v-for="(item, index) in tabs" :key="index" :value="item.value" :label="item.label">
            <slot :name="item.slot"></slot>
        </t-tab-panel>
    </t-tabs>
</template>
<script setup lang="ts">
import { defineProps, ref, } from 'vue'

type Tab = {
    label: string,
    value: number,
    slot: string
}

const props = defineProps({
    pen: {
        type: Object,
        default: () => ({}),
    },
    tabs: {
        type: Array as () => Tab[],
        default: () => ([]),
    },
    defaultValue: {
        type: Number,
        default: 1,
    }
})

const activePanel = ref(props.defaultValue)

const emit = defineEmits(['change'])
const changeValue = (value: number) => {
    emit('change', value)
}

</script>
<style lang="scss" scoped>

</style>