import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import nProgress from 'nprogress';

const Start = () => import('./docs/start.zh-CN.md');
const StartEn = () => import('./docs/start.en-US.md');
const PortalNavbar = import('@dangojs/portal-navbar/docs/README.md');
const QueryHeader = import('@dangojs/a-query-header/docs/README.md');
const QueryTable = import('@dangojs/a-query-table/docs/README.md');
const PageContainer = import('@dangojs/a-page-container/docs/README.md');
const NoDoc = import('./docs/nodoc.zh-CN.md');
const Vue3Transitions = import('./docs/nodoc.zh-CN.md');

const DigitmCli = import('./docs/plugins/cli/digitm.zh-CN.md');

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

const components = [
  {
    name: 'common',
    list: [
      {
        name: 'portalNavbar',
        component: () => PortalNavbar,
      },
      {
        name: 'queryHeader',
        component: () => QueryHeader,
      },
      {
        name: 'queryTable',
        component: () => QueryTable,
      },
      {
        name: 'pageContainer',
        component: () => PageContainer,
      },
      {
        name: 'transferTree',
        component: () => NoDoc,
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
  {
    name: 'bigdata',
    list: [
      {
        name: 'vue3Corn',
        component: () => NoDoc,
      },
      {
        name: 'vue3Monaco',
        component: () => NoDoc,
      },
    ],
  },
  {
    name: 'other',
    list: [
      {
        name: 'vue3Snipp',
        component: () => NoDoc,
      },
    ],
  },
];

const plugins = [
  {
    name: 'cli',
    list: [
      {
        name: 'digitm',
        component: () => DigitmCli,
      },
    ],
  },
  {
    name: 'vscode',
    list: [
      {
        name: 'api2code',
        component: () => NoDoc,
      },
      {
        name: 'createApplication',
        component: () => NoDoc,
      },
      {
        name: 'snippetsUtils',
        component: () => NoDoc,
      },
    ],
  },
  {
    name: 'chrome',
    list: [
      {
        name: 'hinata',
        component: () => NoDoc,
      },
    ],
  },
  {
    name: 'vite',
    list: [],
  },
];

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
const zoologysMenu: ComponentMenuGroup[] = [];
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

// 开发套件
const pluginsMenu: ComponentMenuGroup[] = [];
for (const group of plugins) {
  const menuGroup: ComponentMenuGroup = {
    name: group.name,
    list: [],
  };
  for (const item of group.list) {
    const path = `/plugins/${toKebabCase(item.name)}`;
    routes.push({
      path,
      component: item.component,
    });
    menuGroup.list.push({
      name: item.name,
      path,
    });
  }
  pluginsMenu.push(menuGroup);
}

// Add redirects for unmatched routes at the end
routes.push({ path: '/components', redirect: '/components/portal-navbar' });
routes.push({ path: '/zoologys', redirect: '/zoologys/vue3-transitions' });
routes.push({ path: '/plugins', redirect: '/plugins/digitm' });
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
];

export { docsMenu, componentMenu, docsMenuList, zoologysMenu, pluginsMenu };
export default router;
