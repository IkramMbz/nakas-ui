import { useDialogContext } from "./dialog-context.js";
import { DialogItem } from "./dialog-item.js";

export const DialogContainer = (): React.ReactElement | null => {
  const { dialogs } = useDialogContext();

  if (dialogs.length === 0) return null;

  const currentDialog = dialogs[dialogs.length - 1];

  return <DialogItem dialog={currentDialog} />;
};
