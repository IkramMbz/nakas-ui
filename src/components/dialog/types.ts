export type DialogVariant = "default" | "danger" | "success" | "warning";

export interface DialogConfig {
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
}

export interface DialogOpenProps {
  title: string;
  description?: string;
  icon?: React.ReactNode;
  confirmText?: string;
  cancelText?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
  variant?: DialogVariant;
  className?: string;
}

export interface DialogCustomProps {
  title: string;
  content: React.ReactNode;
  icon?: React.ReactNode;
  variant?: DialogVariant;
  onCancel?: () => void;
  className?: string;
}

export interface DialogContextType {
  dialogs: DialogConfig[];
  openDialog: (config: Omit<DialogConfig, "id">) => string;
  closeDialog: (id?: string) => void;
}
