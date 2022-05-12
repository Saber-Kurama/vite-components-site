/*
 * @Author: saber
 * @Date: 2022-04-18 15:01:38
 * @LastEditTime: 2022-05-12 17:15:43
 * @LastEditors: saber
 * @Description:
 */
/**
 * Introduces component library styles on demand.
 * 按需引入组件库样式
 * https://github.com/anncwb/vite-plugin-style-import
 */

import { createStyleImportPlugin } from 'vite-plugin-style-import';
import { dongojsLibs } from './dongojs';

// todo: 是否采用 env 的环境来适配
// export const configStyleImportDevPlugin() {

// }
// 目前因为 自定义 主题的原因 css 是全量 加载的
const arcoLibs = {
  libraryName: '@arco-design/web-vue',
  esModule: true,
  resolveStyle: (name) => {
    // The use of this part of the component must depend on the parent, so it can be ignored directly.
    // 这部分组件的使用必须依赖父级，所以直接忽略即可。
    const ignoreList = [
      'config-provider',
      'anchor-link',
      'sub-menu',
      'menu-item',
      'menu-item-group',
      'breadcrumb-item',
      'form-item',
      'step',
      'card-grid',
      'card-meta',
      'collapse-panel',
      'descriptions-item',
      'list-item',
      'list-item-meta',
      'table-column',
      'table-column-group',
      'tab-pane',
      'tab-content',
      'timeline-item',
      'tree-node',
      'skeleton-line',
      'skeleton-shape',
      'grid-item',
      'carousel-item',
      'doption',
      'option',
    ];
    // List of components that need to map imported styles
    // 需要映射引入样式的组件列表
    const replaceList = {
      'typography-text': 'typography',
      'typography-title': 'typography',
      'typography-paragraph': 'typography',
      'typography-link': 'typography',
      'dropdown-button': 'dropdown',
      'input-password': 'input',
      'input-search': 'input',
      'input-group': 'input',
      'radio-group': 'radio',
      'checkbox-group': 'checkbox',
      'layout-sider': 'layout',
      'layout-content': 'layout',
      'layout-footer': 'layout',
      'layout-header': 'layout',
      'month-picker': 'date-picker',
      'range-picker': 'date-picker',
      row: 'grid', // 'grid/row.less'
      col: 'grid', // 'grid/col.less'
      'avatar-group': 'avatar',
    };
    if (ignoreList.includes(name)) return '';
    // eslint-disable-next-line no-prototype-builtins
    return replaceList.hasOwnProperty(name)
      ? `@arco-design/web-vue/es/${replaceList[name]}/style/css.js`
      : `@arco-design/web-vue/es/${name}/style/css.js`;

    // less
    // return `@arco-design/web-vue/es/${name}/style/index.js`;
  },
};
export default function configStyleImportPlugin() {
  console.log('dongojsLibs', dongojsLibs);
  const styleImportPlugin = createStyleImportPlugin({
    libs: [...dongojsLibs],
  });
  return styleImportPlugin;
}
