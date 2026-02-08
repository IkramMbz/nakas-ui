import { DialogContextType, DialogOpenProps, DialogCustomProps } from "./types.js";
export declare const setDialogManager: (manager: DialogContextType | null) => void;
export declare const dialog: {
    open: (props: DialogOpenProps) => string;
    openCustom: (props: DialogCustomProps) => string;
    close: (id?: string) => void;
};
//# sourceMappingURL=dialog.d.ts.map