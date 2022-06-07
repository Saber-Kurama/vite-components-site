```yaml
title:
  zh-CN: 按需加载
  en-US: Tree shaking
```

## zh-CN

可以通过单独引入图标的方式实现按需加载。

---

```vue
<template>
  <a-space size="large">
    <general :style="{fontSize:'32px'}" />
    <Home :style="{fontSize:'32px', color: 'red'}" />
    <Dashboard size="32" />
    <FileSync size="32" />
    <MenuFold size="32" />
  </a-space>
</template>

<script>
import { Fire, General, Home, Dashboard, FileSync, MenuFold  } from '@dangojs/digitforce-icons-vue';
export default {
  components: { Fire, General, Home, Dashboard, FileSync, MenuFold }
}
</script>
```


