
```yaml
meta:
  type: 组件
  category: 通用
title: 左侧菜单 
description: 用于布局的左侧菜单
```

@import ../__demo__/basic.md


## API


### `<a-left-menu>` Props

|参数名|描述|类型|默认值|
|---|---|---|:---:|
|menu-tree|菜单的树形数据|`IMenuItem[]`|`[]`|
|menu-item-click|菜单 item 的点击事件|`(item: IMenuItem) => void`|`() => {}`|

### 类型

``` ts
interface IMenuItem {
  resourceName: string; // 资源名称 菜单的名称
  resourceLink: string; // 菜单的路由地址
  resourceCode?: string; // 菜单的code
  resourcePath?: string; // resourcePath
  resourceIcon?: string; // 菜单
  default?: boolean;
  childrens?: IMenuItem[]; //
}
```



