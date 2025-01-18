export interface LayoutConfig {
  theme: 'light' | 'dark';
  nav: 'vertical' | 'horizontal';
  layout: {
    mode: 'fluid' | 'boxed';
    position: 'fixed' | 'scrollable';
  };
  topbar: {
    color: 'light' | 'dark';
  };
  menu: {
    color: 'light' | 'dark';
  };
  sidenav: {
    size: 'default' | 'condensed' | 'compact' | 'full' | 'fullscreen';
    user: boolean;
  };
}

export const defaultConfig: LayoutConfig = {
  theme: 'light',
  nav: 'vertical',
  layout: {
    mode: 'fluid',
    position: 'fixed',
  },
  topbar: {
    color: 'light',
  },
  menu: {
    color: 'dark',
  },
  sidenav: {
    size: 'default',
    user: false,
  },
};

// Hook para gerenciar a configuração do layout
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface LayoutState extends LayoutConfig {
  setTheme: (theme: LayoutConfig['theme']) => void;
  setNav: (nav: LayoutConfig['nav']) => void;
  setLayoutMode: (mode: LayoutConfig['layout']['mode']) => void;
  setLayoutPosition: (position: LayoutConfig['layout']['position']) => void;
  setTopbarColor: (color: LayoutConfig['topbar']['color']) => void;
  setMenuColor: (color: LayoutConfig['menu']['color']) => void;
  setSidenavSize: (size: LayoutConfig['sidenav']['size']) => void;
  setSidenavUser: (show: boolean) => void;
  resetConfig: () => void;
}

export const useLayoutStore = create<LayoutState>()(
  persist(
    (set) => ({
      ...defaultConfig,
      setTheme: (theme) => set({ theme }),
      setNav: (nav) => set({ nav }),
      setLayoutMode: (mode) => set((state) => ({ layout: { ...state.layout, mode } })),
      setLayoutPosition: (position) => set((state) => ({ layout: { ...state.layout, position } })),
      setTopbarColor: (color) => set((state) => ({ topbar: { ...state.topbar, color } })),
      setMenuColor: (color: LayoutConfig['menu']['color']) => set((state) => ({ menu: { ...state.menu, color } })),
      setSidenavSize: (size) => set((state) => ({ sidenav: { ...state.sidenav, size } })),
      setSidenavUser: (user) => set((state) => ({ sidenav: { ...state.sidenav, user } })),
      resetConfig: () => set(defaultConfig),
    }),
    {
      name: 'layout-config',
    }
  )
);
