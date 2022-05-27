import Button from "./Button";
import React from "react";


const Home = () => {
  return (
    <div>
      <Button
        children="Submit"
        onClick={() => {
          console.log("Submit");
        }}
        variant="contained"
      />
      <Button
        children="Ok"
        variant="outline"
        onClick={() => {
          console.log("outline");
        }}
      />
      <Button
        children="Save"
        variant="text"
        onClick={() => {
          console.log("outline");
        }}
      />
    </div>
  );
};

export default Home;
