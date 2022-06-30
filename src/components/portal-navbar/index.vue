<script lang="ts" setup>
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PortalNavbar from '@dangojs/portal-navbar';
import { onMounted, ref } from 'vue';
import router from '../../router';


const logoMenusData = [
  {
    name: '数字化营销',
    type: '1',
    list: [
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-logo.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/insi.svg',
        logo: 'https://image.parligerly.com/protal-svg/insi-logo.svg',
        title: 'Insight Force',
        desc: '经营分析平台',
      },
    ],
  },
  {
    name: '数字化建设',
    type: '2',
    list: [
      {
        icon: 'https://image.parligerly.com/protal-svg/metr.svg',
        logo: 'https://image.parligerly.com/protal-svg/metr-logo.svg',
        title: 'Metrics Force',
        desc: '指标平台',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/cust.svg',
        logo: 'https://image.parligerly.com/protal-svg/cust-logo.svg',
        title: 'Customer Engine',
        desc: '用户数据平台',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/data.svg',
        logo: 'https://image.parligerly.com/protal-svg/data-logo.svg',
        title: 'Data Engine',
        desc: '大数据开发治理套件',
      },
    ],
  },
  {
    name: '数字化供应链',
    type: '3',
    list: [
      {
        icon: 'https://image.parligerly.com/protal-svg/dema.svg',
        logo: 'https://image.parligerly.com/protal-svg/dema-logo.svg',
        title: 'Demand Forecasting',
        desc: '智能预测',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/repl.svg',
        logo: 'https://image.parligerly.com/protal-svg/repl-logo.svg',
        title: 'Replenishment',
        desc: '智能补货',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/asso.svg',
        logo: 'https://image.parligerly.com/protal-svg/asso-logo.svg',
        title: 'Assortment',
        desc: '智能选品',
      },
    ],
  },
];

const menusData = [
  {
    resourceCode: '1',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/docs',
    resourceName: '文档',
  },
  {
    resourceCode: '2',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/components',
    resourceName: '高级组件',
  },
  {
    resourceCode: '3',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/zoologys',
    resourceName: '组件生态',
  },
  {
    resourceCode: '4',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/plugins',
    resourceName: '开发套件',
  },
  {
    resourceCode: '5',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/solution',
    resourceName: '解决方案',
  },
];
const tenantOptionsData = [
  {
    label: 'xxx有限公司',
    value: '1',
    key: '1',
  },
  {
    label: 'xxxxxx有限公司',
    value: '2',
    key: '2',
  },
];
const logo = ref('https://image.parligerly.com/protal-svg/logo-hom.svg');
const logoMenus = ref(logoMenusData);
const menus = ref(menusData);
const activeMenu = ref('2');
const tenantOptions = ref(tenantOptionsData);
const tenant = ref('1');
onMounted(() => {
  const menu = menusData.find((menu) => window.location.pathname.startsWith(menu.resourceLink));
  activeMenu.value = menu?.resourceCode || '2'
})
const onLogoMenuClick = (item: any) => {
  console.log('item---', item);
  logo.value = item.logo;
};
const onMenuClick = (key: string) => {
  console.log('key---', key);
  const menu = menusData.find((menu) => menu.resourceCode === key); 
  router.push({ path: menu?.resourceLink || '/'})
};
const onTenantChange = (value: string) => {
  console.log('value---', value);
};
</script>

<template>
  <PortalNavbar
    :logo="logo"
    :logoMenus="logoMenus"
    @logoMenuClick="onLogoMenuClick"
    :menus="menus"
    v-model:activeMenu="activeMenu"
    @menu-item-click="onMenuClick"
    :tenant="tenant"
    :tenantOptions="tenantOptions"
    @tenantChange="onTenantChange"
  ></PortalNavbar>
</template>
