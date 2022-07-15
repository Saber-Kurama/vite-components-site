import path, { dirname } from 'path';
import { defineConfig, InlineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';
import vueJsx from '@vitejs/plugin-vue-jsx';
import vueDocs from '@arco-design/vite-plugin-arco-vue-docs';
import svgLoader from 'vite-svg-loader';
import eslint from 'vite-plugin-eslint';
import configStyleImportPlugin from './config/plugin/styleImport';
import paths from './paths';

const root = process.cwd();


export default defineConfig({
  mode: 'production',
  base: '/',
  css: {
    preprocessorOptions: {
      less: {},
    },
  },
  resolve: {
    alias: [
      {
        find: 'vue-i18n',
        replacement: path.join(__dirname,'node_modules/vue-i18n/dist/vue-i18n.cjs.js'), // Resolve the i18n warning issue
      },
      {
        find: 'vue',
        replacement: path.resolve(__dirname, './node_modules/vue/dist/vue.esm-bundler.js'), // compile template
      },
    ],
  },
  plugins: [
    vueDocs(),
    vue(),
    vueJsx(),
    svgLoader({ svgoConfig: {} }),
    configStyleImportPlugin(),
  ],
}) as InlineConfig;
