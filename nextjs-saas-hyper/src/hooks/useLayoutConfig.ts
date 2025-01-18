import { create } from 'zustand';

export type LayoutMode = 'fluid' | 'boxed' | 'detached';
export type LayoutPosition = 'fixed' | 'scrollable';
export type TopbarColor = 'light' | 'dark' | 'brand';
export type MenuColor = 'light' | 'dark' | 'brand';
export type SidenavSize = 'default' | 'condensed' | 'full';

interface LayoutConfig {
  layout: {
    mode: LayoutMode;
    position: LayoutPosition;
  };
  topbar: {
    color: TopbarColor;
  };
  menu: {
    color: MenuColor;
  };
  sidenav: {
    size: SidenavSize;
    user: boolean;
  };
}

interface LayoutStore extends LayoutConfig {
  setLayoutMode: (mode: LayoutMode) => void;
  setLayoutPosition: (position: LayoutPosition) => void;
  setTopbarColor: (color: TopbarColor) => void;
  setMenuColor: (color: MenuColor) => void;
  setSidenavSize: (size: SidenavSize) => void;
  setSidenavUser: (show: boolean) => void;
  resetConfig: () => void;
}

const defaultConfig: LayoutConfig = {
  layout: {
    mode: 'fluid',
    position: 'fixed',
  },
  topbar: {
    color: 'light',
  },
  menu: {
    color: 'light',
  },
  sidenav: {
    size: 'default',
    user: true,
  },
};

export const useLayoutConfig = create<LayoutStore>((set) => ({
  ...defaultConfig,
  setLayoutMode: (mode) => set((state) => ({ layout: { ...state.layout, mode } })),
  setLayoutPosition: (position) => set((state) => ({ layout: { ...state.layout, position } })),
  setTopbarColor: (color) => set((state) => ({ topbar: { ...state.topbar, color } })),
  setMenuColor: (color) => set((state) => ({ menu: { ...state.menu, color } })),
  setSidenavSize: (size) => set((state) => ({ sidenav: { ...state.sidenav, size } })),
  setSidenavUser: (user) => set((state) => ({ sidenav: { ...state.sidenav, user } })),
  resetConfig: () => set(defaultConfig),
}));
