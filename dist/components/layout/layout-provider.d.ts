import { ReactNode } from "react";
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
export declare function useSidebarLayout(options?: UseSidebarLayoutOptions): UseSidebarLayoutReturn;
interface LayoutProviderProps {
    children: ReactNode;
}
export default function LayoutProvider({ children, }: LayoutProviderProps): React.ReactElement;
export declare const useLayout: () => UseSidebarLayoutReturn;
export {};
//# sourceMappingURL=layout-provider.d.ts.map