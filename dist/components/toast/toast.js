let toastManager = null;
export const setToastManager = (manager) => {
    toastManager = manager;
};
export const toast = {
    success: (props) => {
        if (!toastManager) {
            console.warn("ToastProvider not found. Please wrap your app with ToastProvider.");
            return;
        }
        return toastManager.addToast({
            type: "success",
            title: props?.title ?? "Success",
            description: props?.description,
            id: props?.id,
            duration: props?.duration,
        });
    },
    error: (props) => {
        if (!toastManager) {
            console.warn("ToastProvider not found. Please wrap your app with ToastProvider.");
            return;
        }
        return toastManager.addToast({
            type: "error",
            title: props?.title ?? "Error",
            description: props?.description ?? "Something went wrong.",
            id: props?.id,
            duration: props?.duration,
        });
    },
    loading: (props) => {
        if (!toastManager) {
            console.warn("ToastProvider not found. Please wrap your app with ToastProvider.");
            return;
        }
        return toastManager.addToast({
            type: "loading",
            title: props?.title ?? "Loading",
            description: props?.description ?? "...",
            id: props?.id,
            duration: props?.duration,
        });
    },
    info: (props) => {
        if (!toastManager) {
            console.warn("ToastProvider not found. Please wrap your app with ToastProvider.");
            return;
        }
        return toastManager.addToast({
            type: "info",
            title: props?.title ?? "Info",
            description: props?.description,
            id: props?.id,
            duration: props?.duration,
        });
    },
    dismiss: (id) => {
        if (!toastManager)
            return;
        toastManager.removeToast(id);
    },
    update: (id, props) => {
        if (!toastManager)
            return;
        toastManager.updateToast(id, {
            title: props.title,
            description: props.description,
            type: props.type,
            duration: props.duration,
        });
    },
};
//# sourceMappingURL=toast.js.map