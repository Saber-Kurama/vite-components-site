import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import nProgress from 'nprogress';

const Start = () => import('./docs/start.zh-CN.md');
const StartEn = () => import('./docs/start.en-US.md');
const PortalNavbar = import('@dangojs/portal-navbar/docs/README.md');
const Vue3Transitions = import('./docs/nodoc.zh-CN.md');
// vue3 transitions 动画
// const Dark = () => import('./docs/dark.zh-CN.md');
// const DarkEn = () => import('./docs/dark.en-US.md');
// const Theme = () => import('./docs/theme.zh-CN.md');
// const ThemeEn = () => import('./docs/theme.en-US.md');
// const I18n = () => import('./docs/i18n.zh-CN.md');
// const I18nEn = () => import('./docs/i18n.en-US.md');
// const Changelog = () => import('./pages/changelog/changelog.vue');
// const Button = () => import('@arco-design/web-vue/es/button/README.zh-CN.md');

const docs = [
  {
    name: 'start',
    component: Start,
    componentEn: StartEn,
  },
  // {
  //   name: 'dark',
  //   component: Dark,
  //   componentEn: DarkEn,
  // },
  // {
  //   name: 'theme',
  //   component: Theme,
  //   componentEn: ThemeEn,
  // },
  // {
  //   name: 'i18n',
  //   component: I18n,
  //   componentEn: I18nEn,
  // },
  // {
  //   name: 'changelog',
  //   component: Changelog,
  // },
];

const proDocs = [
  {
    name: 'start',
    component: () => import('./docs/pro/start.zh-CN.md'),
    componentEn: () => import('./docs/pro/start.en-US.md'),
  },
  //   {
  //     name: 'npmScripts',
  //     component: () => import('./docs/pro/npm-scripts.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/npm-scripts.en-US.md'),
  //   },
  //   {
  //     name: 'directory',
  //     component: () => import('./docs/pro/directory.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/directory.en-US.md'),
  //   },
  //   {
  //     name: 'layout',
  //     component: () => import('./docs/pro/layout.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/layout.en-US.md'),
  //   },
  //   {
  //     name: 'routesAndMenu',
  //     component: () => import('./docs/pro/routes-and-menu.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/routes-and-menu.en-US.md'),
  //   },
  //   {
  //     name: 'permission',
  //     component: () => import('./docs/pro/permission.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/permission.en-US.md'),
  //   },
  //   {
  //     name: 'stateManagementPinia',
  //     component: () => import('./docs/pro/state-management-pinia.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/state-management-pinia.en-US.md'),
  //   },
  //   {
  //     name: 'stateManagement',
  //     component: () => import('./docs/pro/state-management.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/state-management.en-US.md'),
  //   },
  //   {
  //     name: 'i18n',
  //     component: () => import('./docs/pro/i18n.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/i18n.en-US.md'),
  //   },
  //   {
  //     name: 'mock',
  //     component: () => import('./docs/pro/mock.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/mock.en-US.md'),
  //   },
  //   {
  //     name: 'build',
  //     component: () => import('./docs/pro/build.zh-CN.md'),
  //     componentEn: () => import('./docs/pro/build.en-US.md'),
  //   },
];

const components = [
  {
    name: 'common',
    list: [
      // {
      //   name: 'button',
      //   component: Start,
      // },
      {
        name: 'portalNavbar',
        component: () => PortalNavbar,
      },
    ],
  },
  //   {
  //     name: 'common',
  //     list: [
  //     ],
  //   },
  //   {
  //     name: 'layout',
  //     list: [
  
  //     ],
  //   },
  //   {
  //     name: 'dataDisplay',
  //     list: [
  //     ],
  //   },
  //   {
  //     name: 'dataEntry',
  //     list: [
  //     ],
  //   },
  //   {
  //     name: 'feedback',
  //     list: [
  //     ],
  //   },
  //   {
  //     name: 'navigation',
  //     list: [
  //     ],
  //   },
  //   {
  //     name: 'other',
  //     list: [

  //  ],
  //  },
];
const zoologys = [
  {
    name: 'common',
    list: [
      {
        name: 'vue3Transitions',
        component: () => Vue3Transitions,
      },
    ],
  },
]


function toKebabCase(string: string) {
  return string.replace(/[A-Z]+/g, (match, offset) => {
    return `${offset > 0 ? '-' : ''}${match.toLocaleLowerCase()}`;
  });
}

interface ComponentMenuGroup {
  name: string;
  list: Array<{
    name: string;
    path: string;
  }>;
}

const routes: RouteRecordRaw[] = [];

const docsMenu = [];
for (const item of docs) {
  const path = `/vue/docs/${toKebabCase(item.name)}`;
  routes.push(
    {
      path,
      component: item.component,
    },
    {
      path: `/vue/en-US/docs/${toKebabCase(item.name)}`,
      component: item.componentEn ?? item.component,
    }
  );
  docsMenu.push({
    name: item.name,
    path,
  });
}

const componentMenu: ComponentMenuGroup[] = [];
for (const group of components) {
  const menuGroup: ComponentMenuGroup = {
    name: group.name,
    list: [],
  };
  for (const item of group.list) {
    const path = `/components/${toKebabCase(item.name)}`;
    routes.push({
      path,
      component: item.component,
    });
    menuGroup.list.push({
      name: item.name,
      path,
    });
  }
  componentMenu.push(menuGroup);
}

// 组件生态
const zoologysMenu:ComponentMenuGroup[] = [];
for (const group of zoologys) {
  const menuGroup: ComponentMenuGroup = {
    name: group.name,
    list: [],
  };
  for (const item of group.list) {
    const path = `/zoologys/${toKebabCase(item.name)}`;
    routes.push({
      path,
      component: item.component,
    });
    menuGroup.list.push({
      name: item.name,
      path,
    });
  }
  zoologysMenu.push(menuGroup);
}

const proDocsMenu: { path: string; name: string }[] = [];
proDocs.forEach((item) => {
  const path = `/vue/docs/pro/${toKebabCase(item.name)}`;
  routes.push(
    {
      path,
      component: item.component,
    },
    {
      path: `/vue/en-US/docs/pro/${toKebabCase(item.name)}`,
      component: item.componentEn ?? item.component,
    }
  );
  proDocsMenu.push({
    name: item.name,
    path,
  });
});

// Add redirects for unmatched routes at the end
routes.push({ path: '/components', redirect: '/components/portal-navbar' });
routes.push({ path: '/zoologys', redirect: '/zoologys/vue3-transitions' });
// routes.push({
//   path: '/:pathMatch(.*)*',
//   redirect: '/components/portal-navbar',
// });

nProgress.configure({ minimum: 0.4, showSpinner: false });

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    // Always scroll to the top
    return { top: 0 };
  },
});

router.beforeEach((to, from) => {
  if (to.path !== from.path) {
    nProgress.start();
  }
});

router.afterEach(() => {
  nProgress.done();
});

const docsMenuList = [
  {
    name: 'docs',
    menu: docsMenu,
  },
  {
    name: 'proDocs',
    menu: proDocsMenu,
  },
];

export { docsMenu, componentMenu, proDocsMenu, docsMenuList, zoologysMenu };
export default router;
