/*
 * @Author: saber
 * @Date: 2022-04-13 16:08:29
 * @LastEditTime: 2022-05-08 09:32:04
 * @LastEditors: saber
 * @Description: 
 */
const { linkPaths } = require('./.digitforce.js');
function readPackage(pkg, context) {
  // 添加了 dev 环境
  if (pkg.name == 'vite-components-site' && process.env.NODE_ENV === 'development') {
    Object.keys(linkPaths).forEach((key) => {
      if (pkg.dependencies[key]) {
        pkg.dependencies[key] = linkPaths[key];
      }
      if (pkg.devDependencies[key]) {
        pkg.devDependencies[key] = linkPaths[key];
      }
    });
  }
  return pkg;
}

module.exports = {
  hooks: {
    readPackage,
  },
};
