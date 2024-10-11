import React, { FC } from "react";

export interface IConditionalRenderProps {
  condition: boolean;
  children: React.ReactNode;
}

const ConditionalRender: FC<IConditionalRenderProps> = ({
  children,
  condition,
}) => {
  return condition ? <>{children}</> : null;
};

export default ConditionalRender;
