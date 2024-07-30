import React from "react";
import { ISVGImageProps } from "./types";

export const SVGImage: React.FC<ISVGImageProps> = ({
  Icon,
  width = 20,
  height = 20,
  color = "var(--white)",
  ...props
}) => {
  return (
    <div>
      <Icon width={width} height={height} color={color} {...props} />
    </div>
  );
};
