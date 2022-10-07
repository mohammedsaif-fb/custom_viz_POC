import React, { useState, useEffect } from "react";
import { Group } from "react-konva";
import { EditableText } from "./EditableText";
import { ResizableText } from "./ResizableText";

export function StickyNote({
  colour,
  text,
  x,
  y,
  width,
  height,
  onClick,
  onTextResize,
  onTextChange,
  selected,
  onTextClick
}) {
  const [isTransforming, setIsTransforming] = useState(false);

  useEffect(() => {
    if (!selected && isTransforming) {
      setIsTransforming(false);
    }
  }, [selected, isTransforming]);

  function toggleTransforming() {
    setIsTransforming(!isTransforming);
    onTextClick(!isTransforming);
  }

  return (
    <Group x={x} y={y}>
      <EditableText
        x={20}
        y={40}
        text={text}
        width={width}
        height={height}
        onResize={onTextResize}
        isTransforming={isTransforming}
        onToggleTransform={toggleTransforming}
        onChange={onTextChange}
      />
    </Group>
  );
}
