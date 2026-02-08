export type DialogVariant = "default" | "danger" | "success" | "warning";

export type DialogConfig = {
  id: string;
  title: string;
  description?: string;
  content?: React.ReactNode;
  icon?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  variant?: DialogVariant;
  className?: string;
};

export type DialogOpenProps = {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  variant?: DialogVariant;
  className?: string;
};

export type DialogCustomProps = {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  variant?: DialogVariant;
  onCancel?: () => void;
  className?: string;
};

export type DialogContextType = {
  dialogs: DialogConfig[];
  openDialog: (config: Omit<DialogConfig, "id">) => string;
  closeDialog: (id?: string) => void;
};
