import { RouteRecordRaw } from 'vue-router'

export const routes: RouteRecordRaw[] = [
    {path: '/', 'component': () => import('./components/views/home/Home.vue')},
    {path: '/docs/contributing/zh', 'component': () => import('./docs/Contributing.zh.md')},
    {path: '/docs/contributors/zh', 'component': () => import('./docs/Contributors.zh.md')},
    {path: '/docs/getting-started/zh', 'component': () => import('./docs/GettingStarted.zh.md')},
    {path: '/docs/global-config/zh', 'component': () => import('./docs/GlobalConfig.zh.md')},
    {path: '/docs/i18n/zh', 'component': () => import('./docs/I18n.zh.md')},
    {path: '/docs/introduce/zh', 'component': () => import('./docs/Introduce.zh.md')},
    {path: '/:pathMatch(.*)*', redirect: '/'},
];
