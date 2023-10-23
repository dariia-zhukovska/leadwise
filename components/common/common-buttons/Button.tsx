import React from "react";

import styles from "./styles.module.scss";

type ButtonProps = {
  size: "M" | "S";
  variant: "primary" | "outline" | "link";
  state: "default" | "disabled";
  onClick?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onSubmit?: () => void;
  type?: "button" | "submit" | "reset";
  placeholder: string;
  extraSign?: boolean;
};

const Button: React.FC<ButtonProps> = ({
  size,
  variant,
  state,
  type,
  onClick,
  placeholder,
}) => {
  const buttonClass = `${styles.button} 
  ${styles[`button--${size}`]}
  ${styles[`button--${variant}`]} 
  ${styles[`button--${variant}-${state}`]}`;

  return (
    <button className={buttonClass} onClick={onClick} type={type}>
      <div>{placeholder}</div>

      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="18"
        viewBox="0 0 20 18"
        fill="none"
        className={styles.extraSign}
      >
        <path
          d="M11.5 1L19 9M19 9L11.5 17M19 9L1 9"
          stroke="#F2F3F2"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </button>
  );
};

export default Button;
