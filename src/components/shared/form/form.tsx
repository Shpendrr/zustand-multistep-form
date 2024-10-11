import React, { FormHTMLAttributes, FC } from "react";

interface IFormProps extends FormHTMLAttributes<HTMLFormElement> {
  children: React.ReactNode;
}

const Form: FC<IFormProps> = ({ children, ...props }) => {
  return <form {...props}>{children}</form>;
};

export default Form;
