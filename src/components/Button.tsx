import React from "react";
import { StyledButton } from "../style/Button";

interface IProps {
  label?: React.ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outline" | "text";
}

const Button: React.FC<IProps> = ({
  label,
  onClick,
  variant,
  ...rest
}: IProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {label}
    </StyledButton>
  );
};

export default Button;
