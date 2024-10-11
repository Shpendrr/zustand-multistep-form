import React, { FC } from "react";

interface IContainerProps {
  children: React.ReactNode;
}

const Container: FC<IContainerProps> = ({ children }) => {
  return <div className="max-w-7xl mx-auto">{children}</div>;
};

export default Container;
