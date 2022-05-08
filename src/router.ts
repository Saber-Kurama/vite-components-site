import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import nProgress from 'nprogress';

const Start = () => import('./docs/start.zh-CN.md');
const StartEn = () => import('./docs/start.en-US.md');
const PortalNavbar = import('@dangojs/portal-navbar/docs/README.md');
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
      {
        name: 'button',
        component: Start,
      },
      {
        name: 'portalNavbar',
        component: PortalNavbar,
      }
    ],
  },
  //   {
  //     name: 'common',
  //     list: [
  //       {
  //         name: 'button',
  //         component: Button,
  //         componentEn: ButtonEn,
  //       },
  //       {
  //         name: 'icon',
  //         component: Icon,
  //       },
  //       {
  //         name: 'link',
  //         component: Link,
  //         componentEn: LinkEn,
  //       },
  //       {
  //         name: 'typography',
  //         component: Typography,
  //         componentEn: TypographyEn,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'layout',
  //     list: [
  //       {
  //         name: 'divider',
  //         component: Divider,
  //         componentEn: DividerEn,
  //       },
  //       {
  //         name: 'grid',
  //         component: Grid,
  //         componentEn: GridEn,
  //       },
  //       {
  //         name: 'layout',
  //         component: Layout,
  //         componentEn: LayoutEn,
  //       },
  //       {
  //         name: 'space',
  //         component: Space,
  //         componentEn: SpaceEn,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'dataDisplay',
  //     list: [
  //       {
  //         name: 'avatar',
  //         component: Avatar,
  //         componentEn: AvatarEn,
  //       },
  //       {
  //         name: 'badge',
  //         component: Badge,
  //         componentEn: BadgeEn,
  //       },
  //       {
  //         name: 'card',
  //         component: Card,
  //         componentEn: CardEn,
  //       },
  //       {
  //         name: 'carousel',
  //         component: Carousel,
  //         componentEn: CarouselEn,
  //       },
  //       {
  //         name: 'collapse',
  //         component: Collapse,
  //         componentEn: CollapseEn,
  //       },
  //       {
  //         name: 'comment',
  //         component: Comment,
  //         componentEn: CommentEn,
  //       },
  //       {
  //         name: 'descriptions',
  //         component: Descriptions,
  //         componentEn: DescriptionsEn,
  //       },
  //       {
  //         name: 'empty',
  //         component: Empty,
  //         componentEn: EmptyEn,
  //       },
  //       {
  //         name: 'image',
  //         component: Image,
  //         componentEn: ImageEn,
  //       },
  //       {
  //         name: 'list',
  //         component: List,
  //         componentEn: ListEn,
  //       },
  //       {
  //         name: 'popover',
  //         component: Popover,
  //         componentEn: PopoverEn,
  //       },
  //       {
  //         name: 'statistic',
  //         component: Statistic,
  //         componentEn: StatisticEn,
  //       },
  //       {
  //         name: 'table',
  //         component: Table,
  //         componentEn: TableEn,
  //       },
  //       {
  //         name: 'tabs',
  //         component: Tabs,
  //         componentEn: TabsEn,
  //       },
  //       {
  //         name: 'tag',
  //         component: Tag,
  //         componentEn: TagEn,
  //       },
  //       {
  //         name: 'timeline',
  //         component: Timeline,
  //         componentEn: TimelineEn,
  //       },
  //       {
  //         name: 'tooltip',
  //         component: Tooltip,
  //         componentEn: TooltipEn,
  //       },
  //       {
  //         name: 'tree',
  //         component: Tree,
  //         componentEn: TreeEn,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'dataEntry',
  //     list: [
  //       {
  //         name: 'autoComplete',
  //         component: AutoComplete,
  //         componentEn: AutoCompleteEn,
  //       },
  //       {
  //         name: 'cascader',
  //         component: Cascader,
  //         componentEn: CascaderEn,
  //       },
  //       {
  //         name: 'checkbox',
  //         component: Checkbox,
  //         componentEn: CheckboxEn,
  //       },
  //       {
  //         name: 'datePicker',
  //         component: DatePicker,
  //         componentEn: DatePickerEn,
  //       },
  //       {
  //         name: 'form',
  //         component: Form,
  //         componentEn: FormEn,
  //       },
  //       {
  //         name: 'input',
  //         component: Input,
  //         componentEn: InputEn,
  //       },
  //       {
  //         name: 'inputNumber',
  //         component: InputNumber,
  //         componentEn: InputNumberEn,
  //       },
  //       {
  //         name: 'inputTag',
  //         component: InputTag,
  //         componentEn: InputTagEn,
  //       },
  //       {
  //         name: 'mention',
  //         component: Mention,
  //         componentEn: MentionEn,
  //       },
  //       {
  //         name: 'radio',
  //         component: Radio,
  //         componentEn: RadioEn,
  //       },
  //       {
  //         name: 'rate',
  //         component: Rate,
  //         componentEn: RateEn,
  //       },
  //       {
  //         name: 'select',
  //         component: Select,
  //         componentEn: SelectEn,
  //       },
  //       {
  //         name: 'slider',
  //         component: Slider,
  //         componentEn: SliderEn,
  //       },
  //       {
  //         name: 'switch',
  //         component: Switch,
  //         componentEn: SwitchEn,
  //       },
  //       {
  //         name: 'textarea',
  //         component: Textarea,
  //         componentEn: TextareaEn,
  //       },
  //       {
  //         name: 'timePicker',
  //         component: TimePicker,
  //         componentEn: TimePickerEn,
  //       },
  //       {
  //         name: 'transfer',
  //         component: Transfer,
  //         componentEn: TransferEn,
  //       },
  //       {
  //         name: 'treeSelect',
  //         component: TreeSelect,
  //         componentEn: TreeSelectEn,
  //       },
  //       {
  //         name: 'upload',
  //         component: Upload,
  //         componentEn: UploadEn,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'feedback',
  //     list: [
  //       {
  //         name: 'alert',
  //         component: Alert,
  //         componentEn: AlertEn,
  //       },
  //       {
  //         name: 'drawer',
  //         component: Drawer,
  //         componentEn: DrawerEn,
  //       },
  //       {
  //         name: 'message',
  //         component: Message,
  //         componentEn: MessageEn,
  //       },
  //       {
  //         name: 'modal',
  //         component: Modal,
  //         componentEn: ModalEn,
  //       },
  //       {
  //         name: 'notification',
  //         component: Notification,
  //         componentEn: NotificationEn,
  //       },
  //       {
  //         name: 'popconfirm',
  //         component: Popconfirm,
  //         componentEn: PopconfirmEn,
  //       },
  //       {
  //         name: 'progress',
  //         component: Progress,
  //         componentEn: ProgressEn,
  //       },
  //       {
  //         name: 'result',
  //         component: Result,
  //         componentEn: ResultEn,
  //       },
  //       {
  //         name: 'spin',
  //         component: Spin,
  //         componentEn: SpinEn,
  //       },
  //       {
  //         name: 'skeleton',
  //         component: Skeleton,
  //         componentEn: SkeletonEn,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'navigation',
  //     list: [
  //       {
  //         name: 'breadcrumb',
  //         component: Breadcrumb,
  //         componentEn: BreadcrumbEn,
  //       },
  //       {
  //         name: 'dropdown',
  //         component: Dropdown,
  //         componentEn: DropdownEn,
  //       },
  //       {
  //         name: 'menu',
  //         component: Menu,
  //         componentEn: MenuEn,
  //       },
  //       {
  //         name: 'pageHeader',
  //         component: PageHeader,
  //         componentEn: PageHeaderEn,
  //       },
  //       {
  //         name: 'pagination',
  //         component: Pagination,
  //         componentEn: PaginationEn,
  //       },
  //       {
  //         name: 'steps',
  //         component: Steps,
  //         componentEn: StepsEn,
  //       },
  //     ],
  //   },
  //   {
  //     name: 'other',
  //     list: [
  //       {
  //         name: 'affix',
  //         component: Affix,
  //         componentEn: AffixEn,
  //       },
  //       {
  //         name: 'anchor',
  //         component: Anchor,
  //         componentEn: AnchorEn,
  //       },
  //       {
  //         name: 'backTop',
  //         component: BackTop,
  //         componentEn: BackTopEn,
  //       },
  //       {
  //         name: 'configProvider',
  //         component: ConfigProvider,
  //         componentEn: ConfigProviderEn,
  //       },
  //       {
  //         name: 'resizeBox',
  //         component: ResizeBox,
  //         componentEn: ResizeBoxEn,
  //       },
  //       {
  //         name: 'trigger',
  //         component: Trigger,
  //         componentEn: TriggerEn,
  //       },
  //       {
  //         name: 'split',
  //         component: Split,
  //         componentEn: SplitEn,
  //       },
  //  ],
  //  },
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
routes.push({ path: '/components', redirect: '/components/button' });
routes.push({ path: '/:pathMatch(.*)*', redirect: '/components/button' });

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

export { docsMenu, componentMenu, proDocsMenu, docsMenuList };
export default router;
