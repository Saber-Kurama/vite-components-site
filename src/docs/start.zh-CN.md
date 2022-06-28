```yaml
meta:
  type: 开发指南
title: 快速上手
description: 跟随以下的步骤，快速上手组件库的使用。
```

## Vue 版本

vue >= 3.2.0

**注意**： `Vue3` 不支持IE浏览器环境，如果需要可以增加 `polyfill`。

## 统一主题(主题平台定制)

``` ts
npm install --save @arco-themes/vue-digitforce
```

## 安装组件

```shell
# npm
npm install --save @dangojs/a-pro-components
# yarn
yarn add  @dangojs/a-pro-components
```

## 完整引入

```ts

```

## 使用

``` ts
  import { APageContainer } from '@dangojs/a-pro-components';
```

## 按需加载（模板）

如果使用模板方式进行开发，可以使用 [unplugin-vue-components](https://github.com/antfu/unplugin-vue-components) 插件来开启按需加载的支持。
插件会自动解析模板中的使用到的组件，并导入组件和对应的样式文件。

[@dangojs/unplugin-vue-pro-components-resolver]() 组件的resolver,内置了 `ArcoResolver` 

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import Components from 'unplugin-vue-components/vite';
import DongoResolver from '@dangojs/unplugin-vue-pro-components-resolver';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(),
    Components({
      resolvers: [
        DongoResolver()
      ]
    })
  ]
});
```

举个 🍓 

``` vue
<template>
  <APageContainer></APageContainer>
</template>
```
会自动从`@dangojs/a-pro-components` 加载 APageContainer 并自动加载APageContainer组件样式

注意：这种方法并不会处理用户在 script 中手动导入的组件.

## 按需加载

也可以使用手动导入的方式按需加载组件，组件库已经默认支持 Tree Shaking。可以配合 [vite-plugin-style-import](https://github.com/vbenjs/vite-plugin-style-import) 插件自动加载组件样式。

配合 `@dangojs/style-import-pro-components-resolve` 来解决组件的样式的按需加载

```ts
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import { DangoResolve } from '@dangojs/style-import-pro-components-resolve';

export default defineConfig({
  plugins: [
    vue(),
    styleImport({
      libs: [
        libs: [...DangoResolve()],
      ]
    })
  ]
})
```

