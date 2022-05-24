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
    <Fire :style="{fontSize:'32px'}" />
  </a-space>
</template>

<script>
import { Fire, General  } from '@dangojs/digitforce-icons-vue';
console.log('Fire', File);
export default {
  components: { Fire, General }
}
</script>
```


