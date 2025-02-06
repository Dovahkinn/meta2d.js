<template>
    <div v-show="!!config" class="multiple-data__form" :style="formStyle">
        <t-form v-if="config && config.options" class="demo-form-inline" layout="inline">
            <t-form-item :label="config.label || '分系统选择'">
                <t-select v-model="formInline.data" clearable :popupProps="{
                    attach: '.multiple-data__form',
                }" style="width: 240px;" @change="change">
                    <t-option v-for="item in config.options" :key="item.value" :label="item.label"
                        :value="item.value" />
                </t-select>
            </t-form-item>
            <t-form-item labelWidth="0px">
                <t-button theme="warning" @click="submit" style="margin-right: 16px">
                    {{ config.submitButtonText || '搜索' }}
                </t-button>
                <t-button theme="primary" @click="reset">
                    {{ config.resetButtonText || '重置' }}
                </t-button>
            </t-form-item>
        </t-form>
    </div>
</template>
<script setup lang="ts">
import { ref, computed, } from 'vue'
import { MessagePlugin } from "tdesign-vue-next";

const props = defineProps({
    config: {
        type: Object,
        // default: () => ({
        //     label: '',
        //     labelTextColor: '',
        //     options: [],
        //     submitButtonText: '',
        //     resetButtonText: '',
        // })
    }
})

// 表单所需的样式变量
const formStyle = computed(() => {
    const { 
        labelTextColor = 'white',
        selectBackgroundColor = '',
        selectPopupBackgroundColor = '',
        selectBorderColor = '',
        selectHoverBackgroundColor = '',
        buttonSubmitBackgroundColor = '',
        buttonResetBackgroundColor = '',
    } = props.config || {}
    return {
        // display: props.config ? 'block' : 'none',
        // 表单背景
        backgroundColor: 'transparent',
        '--td-text-color-primary': labelTextColor || 'white',
        '--td-text-color-placeholder': 'white',

        // 下拉框
        '--td-bg-color-specialcomponent': selectBackgroundColor || '#13345d', // 选择框背景
        '--td-border-level-2-color': selectBorderColor || '#709ec0',
        '--td-brand-color-focus': selectBorderColor || '#709ec0',
        '--td-bg-color-container': selectPopupBackgroundColor || '#26588d', // 选择框弹出层
        '--td-bg-color-container-hover': selectHoverBackgroundColor || '#528bce',
        '--td-brand-color-light': selectHoverBackgroundColor || '#528bce',
        '--td-text-color-disabled': selectBorderColor || '#709ec0', // 空提示文字

        // 按钮
        '--td-brand-color': buttonResetBackgroundColor || '#204D87',
        '--td-warning-color-active': buttonSubmitBackgroundColor || '#5D5437',
        '--td-warning-color': buttonSubmitBackgroundColor || '#5D5437',
    }
})

const formInline = ref({
    data: ''
})

const emit = defineEmits(['submit', 'reset', 'change'])

const submit = () => {
    if (!props.config?.dataMap) {
        MessagePlugin.warning('数据映射不存在')
        console.error('数据映射不存在, 请在 multipleDataConfig 中配置 dataMap 参数')
        return
    }
    if (!formInline.value.data) {
        reset()
        return
    }
    const data = props.config.dataMap[formInline.value.data] || {}
    // console.log('submit: ', formInline.value.data, data)
    emit('submit', formInline.value.data, data)

    if (data) {
        // 打开图纸
        meta2d.open(data);
        meta2d.emit("clear");
        meta2d.fitView();
    }
}

const reset = () => {
    formInline.value.data = ''
    // console.log('reset: ', formInline.value.data, props.config)
    emit('reset')
    meta2d.clear();
}

const change = (value: string) => {
    // console.log('change: ', value)
    emit('change', value)
}

</script>

<style lang="scss" scoped>
$selectBackgroundColor: #26588d;
$selectBorderColor: #375879;
$selectHoverBackgroundColor: #528bce;

.multiple-data__form {
    position: absolute;
    z-index: 100;
    top: 9px;
    left: 0px;
    width: 100%;
    height: 50px;
    background: transparent;
}
</style>