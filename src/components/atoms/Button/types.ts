import { PropsWithChildren } from "react";

export type TButtonProps = PropsWithChildren<{
  variant?: "primary" | "secondary" | "white";
  onClick?: () => void;
}>;
