import { PropsWithChildren, CSSProperties } from "react";

export type TTypographyProps = PropsWithChildren<{
  variant?: "primary" | "secondary";
  size?: number;
  weight?: number;

  align?: "start" | "center" | "end" | "justify";
  color?: string;

  style?: CSSProperties;
}>;
