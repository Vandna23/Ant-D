import styled from "styled-components";

interface IProps {
  variant?: "contained" | "outline" | "text";
}
const getButtonStyles = ({ variant }: IProps) => {
  console.log("variant", variant);
  switch (variant) {
    case "contained":
      return `
      background:blue ;
      color:white ;
      border: none;
 `;
    case "outline":
      return `
      background: none;
      color:blue ;
      border: 1px solid blue;
 `;
    case "text":
      return `
      background: none;
      color:blue;
      border: none;
 `;
    default:
      return `
      background:blue;
      color:white ;
      border: none;
  `;
  }
};

export const StyledButton = styled.button<IProps>`
  width: 200px;
  border-radius: 4px;
  height: 50px;
  font-size: 16px;
  cursor: pointer;
  ${({ variant }: any) => getButtonStyles({ variant })}
`;
