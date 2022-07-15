```yaml
title:
  zh-CN: 基本用法
  en-US: Basic Usage
```

## zh-CN

带气泡的按钮

```vue
<template>
  <div style="height: 400px; width: 210px; background: #F6F8FC">
    <Button
      :style="{
        padding: '0 12px',
        height: '30px',
        lineHeight: '30px',
        marginBottom: '4px',
      }"
      type="primary"
      @click="toggleCollapse"
    >
      <icon-menu-unfold v-if="collapsed" />
      <icon-menu-fold v-else />
    </Button>
    <br />
    <ALeftMenu :menuTree="menuTree" :collapsed="collapsed"></ALeftMenu>
  </div>
</template>

<script lang="ts" setup>
import {
  IconMenuFold,
  IconMenuUnfold,
  IconDashboard,
  IconApps,
  IconBug,
  IconBulb,
} from "@arco-design/web-vue/es/icon";
import { Button } from "@arco-design/web-vue";
import ALeftMenu, { IMenuItem } from "@dangojs/a-left-menu";
import { ref } from "vue";

const collapsed = ref(false);
const toggleCollapse = () => {
  collapsed.value = !collapsed.value;
};

interface IMenuItem {
  resourceName: string; // 资源名称 菜单的名称
  resourceLink: string; // 菜单的路由地址
  resourceCode?: string; // 菜单的code
  resourcePath?: string; // resourcePath
  resourceIcon?: string; // 菜单
  default?: boolean;
  childrens?: IMenuItem[]; //
}

const menuTree: IMenuItem[] = [
  {
    resourceCode: "baseComponents",
    resourceIcon: "icon-dashboard",
    resourceLink: "/base-components",
    resourceName: "基础组件",
    resourcePath: "",
    childrens: [
      {
        resourceCode: "common",
        resourceIcon: undefined,
        resourceLink: "/base-components/common",
        resourceName: "通用",
        resourcePath: "",
        childrens: [
          {
            resourceCode: "button",
            resourceIcon: undefined,
            resourceLink: "/base-components/common/button",
            resourceName: "按钮",
            resourcePath: "",
          },
        ],
      },
    ],
  },
  {
    resourceCode: "dashboard",
    resourceIcon: "icon-dashboard",
    resourceLink: "/",
    resourceName: "仪表盘",
    resourcePath: "",
    childrens: [
      {
        resourceCode: "Workplace",
        resourceIcon: undefined,
        resourceLink: "/workplace",
        resourceName: "工作台",
        resourcePath: "",
      },
    ],
  },
];
</script>

```
