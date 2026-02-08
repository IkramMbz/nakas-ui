import { ToastContextType, ToastProps, ToastType } from "./types.js";
export declare const setToastManager: (manager: ToastContextType | null) => void;
export declare const toast: {
    success: (props?: ToastProps) => string | number | undefined;
    error: (props?: ToastProps) => string | number | undefined;
    loading: (props?: ToastProps) => string | number | undefined;
    info: (props?: ToastProps) => string | number | undefined;
    dismiss: (id: string | number) => string | void;
    update: (id: string | number, props: Partial<ToastProps> & {
        type?: ToastType;
    }) => string | void;
};
//# sourceMappingURL=toast.d.ts.map