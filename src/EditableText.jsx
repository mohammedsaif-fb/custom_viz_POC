import React from "react";
import { ResizableText } from "./ResizableText";

export function EditableText({
  x,
  y,
  isTransforming,
  onToggleTransform,
  onChange,
  onResize,
  text,
  width,
  height
}) {
  return (
    <ResizableText
      x={x}
      y={y}
      isSelected={isTransforming}
      onClick={onToggleTransform}
      onResize={onResize}
      text={text}
      width={width}
    />
  );
}
