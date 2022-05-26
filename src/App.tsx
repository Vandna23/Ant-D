import "./App.css";
import FormValidation from "./components/FormValidation";
import LayoutDesign from "./components/LayoutDesign";
import Website from "./components/Website";
import InterfaceDemo from "./components/InterfaceDemo";
import { useState } from "react";
import { Button } from "antd";
import Modal from "./components/Modal";
import ArrayObjectInterface from "./components/ArrayObjectInterface";
import ArrayObject from "./components/ArrayObject";

function App() {
  const [isVisible, setVisible] = useState(false);
  const [modal, setModal] = useState(true);
  const Toggle = () => {
    setModal(!modal);
    // console.log("You aretoggling", setModal);
  };

  const handleClick = () => {
    if (isVisible) {
      return null;
    }
    setVisible(true);

    console.log("You clicked on get Api");
  };
  return (
    <div className="App">
      {/* <Website /> */}
      {/* <LayoutDesign /> */}
      {/* <FormValidation /> */}
      {/* <InterfaceDemo
        name={"vandna"}
        color={"red"}
        age={45}
        status="single"
        vandna={false}
      /> */}
      <InterfaceDemo
        name={"vandna"}
        color={"red"}
        age={45}
        status="single"
        vandna={true}
      >
        salary=50000k
      </InterfaceDemo>
      <Button onClick={() => handleClick()} children="Check" />
      <Button onClick={() => Toggle()} children="Modal" />
      <Modal show={modal} />
      <ArrayObjectInterface />
      <ArrayObject />
    </div>
  );
}

export default App;
