<template>
    <div :style="videoWrapStyles">
      <video id="my-player" ref="videoRef" class="video-js w-full h-full">
        <source :src="src" />
      </video>
    </div>
  </template>
<script setup lang="ts">
import { computed, CSSProperties, onMounted, ref } from 'vue'
import videojs from 'video.js'
import type { VideoJsPlayerOptions } from 'video.js'
import 'video.js/dist/video-js.min.css'

type MyVideoProps = {
  src: string
  width?: string
  height?: string
}
const props = withDefaults(defineProps<MyVideoProps>(), {})

const emit = defineEmits(['ready', 'ended'])

// video标签
const videoRef = ref<HTMLElement | null>(null)
// video实例对象
let videoPlayer: videojs.Player | null = null
const videoWrapStyles = computed<CSSProperties>(() => {
  return {
    width: props.width || '100%',
    height: props.height || '100%',
  }
})
// 初始化videojs
const initVideo = () => {
  // https://gitcode.gitcode.host/docs-cn/video.js-docs-cn/docs/guides/options.html
  const options: VideoJsPlayerOptions = {
    language: 'zh-CN', // 设置语言
    controls: true, // 是否显示控制条
    preload: 'auto', // 预加载
    autoplay: true, // 是否自动播放
    fluid: true, // 自适应宽高
    src: props.src // 要嵌入的视频源的源 URL
  }
  if (videoRef.value) {
    // 创建 video 实例
    videoPlayer = videojs(videoRef.value, options, onPlayerReady)
    videoPlayer.on('ended', (event) => {
      emit('ended', event)
    })
  }
}
// video初始化完成的回调函数
const onPlayerReady = () => {
  // console.log('videoPlayer --> ', videoPlayer)
  emit('ready', videoPlayer)
}
onMounted(() => {
  // console.log('video mounted --> ref: ', videoRef.value, props.src)
  initVideo()
})
</script>

<style lang="scss" scoped>
.w-full {
  width: 100%;
}
.h-full {
  height: 100%;
}

.video-js {
  min-height: 400px;
}
</style>
