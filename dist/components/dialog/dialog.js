let dialogManager = null;
export const setDialogManager = (manager) => {
    dialogManager = manager;
};
export const dialog = {
    open: (props) => {
        if (!dialogManager) {
            console.warn("DialogProvider not found. Please wrap your app with DialogProvider.");
            return "";
        }
        return dialogManager.openDialog({
            title: props.title,
            description: props.description,
            icon: props.icon,
            confirmText: props.confirmText,
            cancelText: props.cancelText,
            onConfirm: props.onConfirm,
            onCancel: props.onCancel,
            variant: props.variant,
            className: props.className,
        });
    },
    openCustom: (props) => {
        if (!dialogManager) {
            console.warn("DialogProvider not found. Please wrap your app with DialogProvider.");
            return "";
        }
        return dialogManager.openDialog({
            title: props.title,
            content: props.content,
            icon: props.icon,
            variant: props.variant,
            onCancel: props.onCancel,
            className: props.className,
        });
    },
    close: (id) => {
        if (!dialogManager)
            return;
        dialogManager.closeDialog(id);
    },
};
//# sourceMappingURL=dialog.js.map