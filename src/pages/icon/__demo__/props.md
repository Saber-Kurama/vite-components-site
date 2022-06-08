```yaml
title:
  zh-CN: 参数
  en-US: Props
```

## zh-CN


###  Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|strokeWidth|线宽|`number`|`1`|
|strokeLinecap|端点类型|`'butt' \| 'round' \| 'square'`|`'butt'`|
|strokeLinejoin|拐角类型|`'bevel' \| 'miter' \| 'round'`|`'miter'`|
|spin|是否旋转|`boolean`|`false`|
|size|尺寸|`number` \| `string`|`-`|

[查看更多图标](https://icons-nextjs-site.vercel.app/#416-%E9%80%9A%E7%94%A8%E7%B1%BB%E5%9B%BE%E6%A0%87)

---
``` vue
  <template>
  <a-space size="large">
    <fire size="32" spin />
  </a-space>
</template>

<script>
import { Fire, General  } from '@dangojs/digitforce-icons-vue';

export default {
  components: { Fire, General }
}
</script>
```

