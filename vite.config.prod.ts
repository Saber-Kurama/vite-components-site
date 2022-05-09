import path from 'path';
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
      less: {
       
      },
    },
  },
  resolve: {
    alias: [
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
