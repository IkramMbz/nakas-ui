export type ToastType = "success" | "error" | "loading" | "info";
export interface Toast {
    id: string | number;
    type: ToastType;
    title: string;
    description?: string;
    duration?: number;
}
export interface ToastProps {
    title?: string;
    description?: string;
    id?: string | number;
    duration?: number;
}
export interface ToastContextType {
    toasts: Toast[];
    addToast: (toast: Omit<Toast, "id"> & {
        id?: string | number;
    }) => string | number;
    removeToast: (id: string | number) => void;
    updateToast: (id: string | number, updates: Partial<Toast>) => void;
}
//# sourceMappingURL=types.d.ts.map