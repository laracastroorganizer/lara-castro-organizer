import { PropsWithChildren } from "react";

export type TFlexProps = PropsWithChildren & {
  direction?: "row" | "row-reverse" | "column" | "column-reverse";
  justifyContent?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly";
  alignItems?: "stretch" | "flex-start" | "flex-end" | "center" | "baseline";
  gap?: number;

  height?: string;
  width?: string;
};
