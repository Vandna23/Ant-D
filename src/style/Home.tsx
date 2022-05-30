import styled from "styled-components";
import Button from "../components/Button";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 20px;
  font-family: "Poppins-Regular";
`;
export const Div = styled.div`
  display: flex;
  gap: 10px;
`;
export const PinkButton = styled(Button)`
  background: pink;
  color: green;
`;
export const GreenButton = styled(Button)`
  background: green;
`;
export const OutlineButton = styled(Button)`
  border: 1px solid green;
  color: green;
`;
export const TextButton = styled(Button)`
  color: green;
`;
