<template>
  <div class="arco-vue-site">
    <PortalNavbar />
    <div
      :class="[
        'arco-vue-body',
        { 'arco-vue-body-has-notice': showGlobalNotice },
      ]"
    >
      <!-- <a-alert
        v-if="showGlobalNotice"
        class="site-global-notice"
        :show-icon="false"
        closable
        banner
        @close="handleCloseGlobalNotice"
      >
        <a
          href="https://mp.weixin.qq.com/s/06ALEmhxJcUqBGIVL4IQvA"
          rel="Arco Global Notice noreferrer"
          target="_blank"
        >
          <span class="content">
            Vue3 将成为默认版本，Arco 助力开发者轻装启航
          </span>
          <b>
            查看更多
            <icon-right />
          </b>
        </a>
      </a-alert> -->
      <aside-nav :show="showNav" @button-click="toggleNav" />
      <router-view />
    </div>
    <ThemeBox />
    <a-back-top :style="{ right: '70px', bottom: '80px' }">
      <a-button class="site-backtop-btn" shape="circle" size="large">
        <icon-up />
      </a-button>
    </a-back-top>
  </div>
</template>

<script lang="ts">
import {
  defineComponent,
  provide,
  reactive,
  ref,
  watch,
  onMounted,
  onBeforeUnmount,
  computed,
} from 'vue';
import { useRoute } from 'vue-router';
// import { PageDurationTracker, teaLog } from '@arco-design/arco-site-utils';
import { collapseInjectionKey } from './context';
// @ts-ignore
import AsideNav from './components/aside-nav/index.vue';
import PortalNavbar from './components/portal-navbar/index.vue';
import { getLocalStorage, setLocalStorage } from './utils/local-storage';
import ThemeBox from './components/theme-box/index.vue';
// import Locale from '@arco-design/web-vue/es/locale';
// import { getLocalStorage, setLocalStorage } from './utils/local-storage';

export default defineComponent({
  name: 'App',
  components: {
    AsideNav,
    ThemeBox,
    PortalNavbar,
  },
  props: {
    theme: String,
    language: String,
  },
  emits: ['themeChange', 'languageChange'],
  setup() {
    const route = useRoute();
    const path = computed(() => route.path);
    const page = computed(() => {
      const match = route.path.match(/\/(\w+)/);
      return match?.[1] ?? 'components';
    });
    const showNav = ref(true);
    const showAnchor = ref(true);
    const showGlobalNotice = ref(
      getLocalStorage('arco-global-notice') !== '3-vue'
    );

    const handleCloseGlobalNotice = () => {
      showGlobalNotice.value = false;
      setLocalStorage('arco-global-notice', '3-vue');
    };

    const toggleNav = () => {
      showNav.value = !showNav.value;
    };

    const toggleAnchor = () => {
      showAnchor.value = !showAnchor.value;
    };

    provide(
      collapseInjectionKey,
      // @ts-ignore
      reactive({
        showNav,
        showAnchor,
        toggleNav,
        toggleAnchor,
        path: path,
        page,
      })
    );

    // provide('toggleTheme', toggleTheme);
    // provide('lang', lang);
    // locale.value = lang.value;
    // provide('changeLanguage', changeLanguage);

    // let tracker: PageDurationTracker;
    let originPath = route.path;

    onMounted(() => {
      // tracker = new PageDurationTracker((params) => {
      //   teaLog('page_view', { ...params, url_path: originPath });
      // });
      console.log('page---', page);
    });

    onBeforeUnmount(() => {
      // tracker = null;
    });

    watch(
      () => route.path,
      (path, prePath) => {
        originPath = prePath;
        // tracker.handleReport();
      }
    );

    return {
      showNav,
      toggleNav,
      showGlobalNotice,
      handleCloseGlobalNotice,
    };
  },
});
</script>

<style lang="less" src="./style/index.less" />
