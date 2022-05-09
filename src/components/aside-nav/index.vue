<template>
  <aside
    :class="cls"
    @transitionstart="handleTranslationStart"
    @transitionend="handleTranslationEnd"
  >
    <nav class="aside-nav">
      <!-- <div class="aside-nav-header">
      </div> -->
      <div v-show="showNav" class="aside-nav-body">
        <!-- <template v-for="group in docsMenuList" :key="group.name">
          <div class="aside-nav-group">
            <div class="aside-nav-group-name">{{
              t(`${group.name}.name`)
            }}</div>
            <ul class="aside-nav-list">
              <router-link
                v-for="item of group.menu"
                :key="item.name"
                v-slot="{ href, navigate, isActive }"
                :to="
                  locale === 'en-US'
                    ? item.path.replace('vue/', 'vue/en-US/')
                    : item.path
                "
                custom
              >
                <li
                  :class="[
                    'aside-nav-item',
                    { 'aside-nav-item-active': isActive },
                  ]"
                >
                  <a
                    :href="
                      locale === 'en-US' ? href.replace('#', '#/en-US') : href
                    "
                    class="aside-nav-item-link"
                    @click="navigate"
                  >
                    {{ t(`${group.name}.${item.name}`) }}
                  </a>
                </li>
              </router-link>
            </ul>
          </div>
        </template> -->

        <div class="aside-nav-group">
          <!-- <div class="aside-nav-group-name">{{ t('component.name') }}</div> -->
          <div
            v-for="group of menus"
            :key="group.name"
            class="aside-nav-group"
          >
            <h4 class="aside-nav-component-group-name">
              {{ t(`group.${group.name}`) }}
            </h4>
            <ul class="aside-nav-list">
              <router-link
                v-for="item of group.list"
                :key="item.name"
                v-slot="{ href, navigate, isActive }"
                :to="
                  locale === 'en-US'
                    ? item.path.replace('vue/', 'vue/en-US/')
                    : item.path
                "
                custom
              >
                <li
                  :class="[
                    'aside-nav-item',
                    { 'aside-nav-item-active': isActive },
                  ]"
                >
                  <a
                    :href="
                      locale === 'en-US' ? href.replace('#', '#/en-US') : href
                    "
                    class="aside-nav-item-link"
                    @click="navigate"
                  >
                    {{ t(`${page}.${item.name}`) }}
                  </a>
                </li>
              </router-link>
            </ul>
          </div>
        </div>
      </div>
    </nav>
    <a-button
      class="aside-nav-btn"
      shape="circle"
      size="mini"
      @click="$emit('buttonClick')"
    >
      <icon-left v-if="show" />
      <icon-right v-else />
    </a-button>
  </aside>
</template>

<script lang="ts">
import { computed, defineComponent, inject, ref } from 'vue';
import { useI18n } from 'vue-i18n';
import { componentMenu, docsMenuList, zoologysMenu, pluginsMenu } from '../../router';
import { CollapseContext, collapseInjectionKey } from '../../context';
// todo: 后续调整统一配置
const menusConfig = {
  'components': componentMenu,
  'zoologys': zoologysMenu,
  'plugins': pluginsMenu 
}


export default defineComponent({
  name: 'AsideNav',
  props: {
    show: {
      type: Boolean,
      default: true,
    },
  },
  emits: ['buttonClick'],
  setup(props) {
    const collapseCtx = inject<CollapseContext>(collapseInjectionKey);
    const { t, locale } = useI18n();
    const showNav = ref(true);
    const menus:any = computed(() => {
      // @ts-ignore
      return menusConfig[collapseCtx.page] || componentMenu 
    });
    const page = computed(() => {
      return collapseCtx?.page || 'components'
    })

    const handleTranslationStart = () => {
      if (props.show) {
        showNav.value = true;
      }
    };

    const handleTranslationEnd = () => {
      if (!props.show) {
        showNav.value = false;
      }
    };

    const cls = computed(() => [
      'arco-vue-aside-left',
      {
        'arco-vue-aside-left-collapse': !props.show,
      },
    ]);

    return {
      showNav,
      componentMenu,
      docsMenuList,
      t,
      locale,
      cls,
      handleTranslationStart,
      handleTranslationEnd,
      menus,
      page: page
    };
  },
});
</script>

<style scoped lang="less" src="./style.less" />
