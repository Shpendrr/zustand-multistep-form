import React, { FC } from "react";

interface IButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}

const Button: FC<IButtonProps> = ({ children, ...props }) => {
  return (
    <button
      className="bg-black text-white w-full  max-w-32 p-1 rounded-xl"
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;
