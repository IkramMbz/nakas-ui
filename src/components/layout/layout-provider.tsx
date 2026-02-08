"use client";

import { createContext, useContext, ReactNode } from "react";
import { useState, useEffect, useCallback } from "react";

interface UseSidebarLayoutOptions {
  defaultAgentHorizontalDisplay?: boolean;
  defaultOpen?: boolean;
  defaultView?: ViewType;
  headerHeight?: number;
  sidebarWidth?: number;
  sidebarFullWidth?: number;
  persistState?: boolean;
}

export type ViewType = "edit" | "overview" | "settings" | "workflow";

export interface UseSidebarLayoutReturn {
  isSidebarOpen: boolean;
  isAgentHorizontalDisplay: boolean;
  headerHeight: number;
  sidebarWidth: number;
  sidebarFullWidth: number;
  currentView: ViewType;
  toggleSidebar: () => void;
  toggleAgentHorizontalDisplay: () => void;
  setSidebarOpen: (value: boolean) => void;
  setAgentHorizontalDisplay: (value: boolean) => void;
  setCurrentView: (view: ViewType) => void;
}

export function useSidebarLayout(
  options: UseSidebarLayoutOptions = {}
): UseSidebarLayoutReturn {
  const {
    defaultAgentHorizontalDisplay = true,
    defaultOpen = true,
    defaultView = "overview",
    headerHeight = 64,
    sidebarWidth = 80,
    sidebarFullWidth = 288,
    persistState = true,
  } = options;

  const loadState = useCallback(
    <T,>(key: string, defaultValue: T): T => {
      if (!persistState) return defaultValue;
      try {
        const stored = localStorage.getItem(key);
        return stored ? (JSON.parse(stored) as T) : defaultValue;
      } catch {
        return defaultValue;
      }
    },
    [persistState]
  );

  const [isSidebarOpen, setIsSidebarOpen] = useState<boolean>(() =>
    loadState("sidebar-open", defaultOpen)
  );

  const [isAgentHorizontalDisplay, setIsAgentHorizontalDisplay] =
    useState<boolean>(() =>
      loadState("agent-display-horizontal", defaultAgentHorizontalDisplay)
    );

  const toggleSidebar = useCallback(() => {
    setIsSidebarOpen((prev) => !prev);
  }, []);

  const toggleAgentHorizontalDisplay = useCallback(() => {
    setIsAgentHorizontalDisplay((prev) => !prev);
  }, []);

  useEffect(() => {
    if (persistState) {
      localStorage.setItem("sidebar-open", JSON.stringify(isSidebarOpen));
    }
  }, [isSidebarOpen, persistState]);

  useEffect(() => {
    if (persistState) {
      localStorage.setItem(
        "agent-display-horizontal",
        JSON.stringify(isAgentHorizontalDisplay)
      );
    }
  }, [isAgentHorizontalDisplay, persistState]);

  const isValidView = (value: string): value is ViewType =>
    ["edit", "overview", "workflow"].includes(value);

  const [currentView, setCurrentView] = useState<ViewType>(() => {
    const stored = loadState("layout-view", defaultView);
    return isValidView(stored) ? stored : defaultView;
  });

  useEffect(() => {
    if (persistState) {
      localStorage.setItem("layout-view", JSON.stringify(currentView));
    }
  }, [currentView, persistState]);

  return {
    isSidebarOpen,
    isAgentHorizontalDisplay,
    headerHeight,
    sidebarWidth,
    sidebarFullWidth,
    currentView,
    setAgentHorizontalDisplay: setIsAgentHorizontalDisplay,
    setSidebarOpen: setIsSidebarOpen,
    setCurrentView: setCurrentView,
    toggleAgentHorizontalDisplay,
    toggleSidebar,
  };
}

const LayoutContext = createContext<UseSidebarLayoutReturn | undefined>(
  undefined
);

interface LayoutProviderProps {
  children: ReactNode;
}

export default function LayoutProvider({
  children,
}: LayoutProviderProps): React.ReactElement {
  const layout = useSidebarLayout();

  return (
    <LayoutContext.Provider value={layout}>{children}</LayoutContext.Provider>
  );
}

export const useLayout = (): UseSidebarLayoutReturn => {
  const context = useContext(LayoutContext);
  if (!context) {
    throw new Error("useLayout must be used within LayoutProvider");
  }
  return context;
};
