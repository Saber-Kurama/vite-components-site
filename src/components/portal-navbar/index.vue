<script lang="ts" setup>
// @ts-ignore
// eslint-disable-next-line import/no-unresolved
import PortalNavbar from '@dangojs/portal-navbar';
import { ref } from 'vue';

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
    name: '数字化营销',
    type: '2',
    list: [
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-log.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-log.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-log.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
    ],
  },
  {
    name: '数字化营销',
    type: '3',
    list: [
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-log.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-log.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
      {
        icon: 'https://image.parligerly.com/protal-svg/mark.svg',
        logo: 'https://image.parligerly.com/protal-svg/mark-log.svg',
        title: 'Marketing Automation',
        desc: '全渠道自动化运营中枢',
      },
    ],
  },
];

const menusData = [
  {
    resourceCode: '1',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/assortment-setting',
    resourceName: '一级菜单',
  },
  {
    resourceCode: '2',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/assortment-setting',
    resourceName: '一级菜单',
  },
  {
    resourceCode: '3',
    resourceIcon: '#icon-xuanpinpeizhi',
    resourceLink: '/assortment-setting',
    resourceName: '一级菜单',
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
const onLogoMenuClick = (item: any) => {
  console.log('item---', item);
  logo.value = item.logo;
};
const onMenuClick = (key: string) => {
  console.log('key---', key);
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
