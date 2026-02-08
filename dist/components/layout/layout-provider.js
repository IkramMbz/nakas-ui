"use client";
import { jsx as _jsx } from "react/jsx-runtime";
import { createContext, useContext } from "react";
import { useState, useEffect, useCallback } from "react";
export function useSidebarLayout(options = {}) {
    const { defaultAgentHorizontalDisplay = true, defaultOpen = true, defaultView = "overview", headerHeight = 64, sidebarWidth = 80, sidebarFullWidth = 288, persistState = true, } = options;
    const loadState = useCallback((key, defaultValue) => {
        if (!persistState)
            return defaultValue;
        try {
            const stored = localStorage.getItem(key);
            return stored ? JSON.parse(stored) : defaultValue;
        }
        catch {
            return defaultValue;
        }
    }, [persistState]);
    const [isSidebarOpen, setIsSidebarOpen] = useState(() => loadState("sidebar-open", defaultOpen));
    const [isAgentHorizontalDisplay, setIsAgentHorizontalDisplay] = useState(() => loadState("agent-display-horizontal", defaultAgentHorizontalDisplay));
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
            localStorage.setItem("agent-display-horizontal", JSON.stringify(isAgentHorizontalDisplay));
        }
    }, [isAgentHorizontalDisplay, persistState]);
    const isValidView = (value) => ["edit", "overview", "workflow"].includes(value);
    const [currentView, setCurrentView] = useState(() => {
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
const LayoutContext = createContext(undefined);
export default function LayoutProvider({ children, }) {
    const layout = useSidebarLayout();
    return (_jsx(LayoutContext.Provider, { value: layout, children: children }));
}
export const useLayout = () => {
    const context = useContext(LayoutContext);
    if (!context) {
        throw new Error("useLayout must be used within LayoutProvider");
    }
    return context;
};
//# sourceMappingURL=layout-provider.js.map