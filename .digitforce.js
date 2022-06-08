/*
 * @Author: saber
 * @Date: 2022-01-12 19:57:21
 * @LastEditTime: 2022-06-07 13:52:06
 * @LastEditors: saber
 * @Description:
 */
const dangojsComBasePath =
'/Users/saber/coding/mygithub/vue3-arco-pro-components/packages';
const baseSource = '/Users/saber/coding/mygithub';
const envBridgePath = `${baseSource}/vite-plugin-env-bridge`;
const iconpath = `/Users/saber/coding/mygithub/digitforce-icons/packages/vue`

// TODO: 这个需要通过 digitforceBasePath 来得到 绝对路径，目前是手写
const linkPaths = {
  '@dangojs/a-query-header': `file://${dangojsComBasePath}/query-header`,
  '@dangojs/a-query-table': `file://${dangojsComBasePath}/query-table`,
  '@dangojs/a-page-container': `file://${dangojsComBasePath}/page-container`,
  '@dangojs/portal-navbar': `file://${dangojsComBasePath}/portal-navbar`,
  '@dangojs/a-transfer-tree': `file://${dangojsComBasePath}/transfer-tree`,
  '@dangojs/digitforce-icons-vue': `file://${iconpath}`,
  // '@dangojs/saber-btn': `file://${dangojsComBasePath}/saber-btn`
};

module.exports.linkPaths = linkPaths;