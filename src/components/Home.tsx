import Button from "./Button";
import {
  GreenButton,
  OutlineButton,
  TextButton,
  PinkButton,
  Div,
  Wrapper,
} from "../style/Home";
import { useNavigate } from "react-router-dom";
const Home = () => {
  const navigate = useNavigate();

  return (
    <Wrapper>
      <h2>Button variants</h2>
      <Div>
        <Button
          label="Submit"
          onClick={() => {
            console.log("contained");
          }}
          variant="contained"
        />
        <Button
          label="Next"
          variant="outline"
          onClick={() => navigate("/dashboard")}
        />
        <Button
          label="Save"
          variant="text"
          onClick={() => navigate("/dashboard")}
        />
      </Div>
      <h2>Button Styles</h2>
      <Div>
        <GreenButton
          label="Submit"
          onClick={() => {
            console.log("contained");
          }}
          variant="contained"
        />
        <OutlineButton
          label="Next"
          variant="outline"
          onClick={() => navigate("/dashboard")}
        />
        <TextButton
          label="Save"
          variant="text"
          onClick={() => {
            console.log("text");
          }}
        />
      </Div>
      <Div>
        <PinkButton
          label="Submit"
          onClick={() => {
            console.log("contained");
          }}
          variant="contained"
        />
      </Div>
    </Wrapper>
  );
};

export default Home;
