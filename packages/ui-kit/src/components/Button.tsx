import React, { HTMLAttributes, PropsWithChildren } from "react";
import styles from "./Button.module.css";
interface ButtonProps
  extends PropsWithChildren,
    HTMLAttributes<HTMLButtonElement> {}

export type { ButtonProps };

const Button: React.FC<ButtonProps> = ({ children, ...rest }) => (
  <button className={styles.btn} {...rest}>
    {children}
  </button>
);

export default Button;
