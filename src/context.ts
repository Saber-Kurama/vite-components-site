import { ComputedRef, InjectionKey } from 'vue';

export interface CollapseContext {
  showNav: boolean;
  showAnchor: boolean;
  toggleNav: () => void;
  toggleAnchor: () => void;
  path: ComputedRef<string>;
  page: ComputedRef<string>;
}

export const collapseInjectionKey: InjectionKey<CollapseContext> =
  Symbol('CollapseContext');
