import { ReactNode } from "react";

export interface IModalProps {
  open: boolean;
  closeCallback: () => void;
  title: string;
  content: ReactNode;
}
