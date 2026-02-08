import { jsx as _jsx } from "react/jsx-runtime";
import { useDialogContext } from "./dialog-context.js";
import { DialogItem } from "./dialog-item.js";
export const DialogContainer = () => {
    const { dialogs } = useDialogContext();
    if (dialogs.length === 0)
        return null;
    const currentDialog = dialogs[dialogs.length - 1];
    return _jsx(DialogItem, { dialog: currentDialog });
};
//# sourceMappingURL=dialog-container.js.map