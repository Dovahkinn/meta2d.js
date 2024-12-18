import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import * as path from 'path';

// https://vitejs.dev/config/
export default defineConfig(({ mode, command }) => {
  const isLib = mode === 'lib';
  return {
    // 打包配置
    build: isLib ? {
      lib: {
        entry: 'src/index.ts', // 设置入口文件
        name: 'meta2d-editor-lib', // 起个名字，安装、引入用
      },
      sourcemap: true, // 输出.map文件
      rollupOptions: {
        // 确保外部化处理那些你不想打包进库的依赖
        external: ['vue'],
        output: {
          // 在 UMD 构建模式下为这些外部化的依赖提供一个全局变量
          globals: {
            vue: 'Vue',
          },
          dir: 'lib'
        },
      },
    } : {},

    plugins: [vue()],
    resolve: {
      alias: {
        '@': path.resolve(__dirname, './src/'),
      },
    },
    server: {
      host: true,
    },
  };
});
