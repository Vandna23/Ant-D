import React from "react";
import { StyledButton } from '../style/Button'

interface IProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "contained" | "outline" | "text";
}
// const StyledVariants=()=>{
//   switch(variant){
//     case contained:
//   }
// }

const Button: React.FC<IProps> = ({ children, onClick, variant }:IProps) => {
  return <StyledButton onClick={onClick} >{children }</StyledButton>;
};

export default Button;
