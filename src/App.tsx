import "./App.css";
// import FormValidation from "./components/FormValidation";
// import LayoutDesign from "./components/LayoutDesign";
// import Website from "./components/Website";
import InterfaceDemo from "./components/InterfaceDemo";
import { useState } from "react";
import { Button } from "antd";
import ModalData from "./components/ModalData";
import ArrayObjectInterface from "./components/ArrayObjectInterface";
import ArrayObject from "./components/ArrayObject";
import SvgComponent from "./assets/svg/SvgComponent";
import Home from "./components/Home";

function App() {
  const [isVisible, setVisible] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  // const Toggle = () => {
  //   setIsOpen(!modal);
  //   // console.log("You aretoggling", setIsOpen);
  // };

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
      />
      <div className="svg">
        <SvgComponent fill="red" />
      </div>
      <InterfaceDemo
        name={"vandna"}
        color={"red"}
        age={45}
        status="single"
        vandna={true}
      >
        This is option interface salary=50000k
      </InterfaceDemo>
      <Button onClick={() => handleClick()} children="Check" />
      <Button onClick={() => setIsOpen(true)} children="ModalData" />
      <ModalData isOpen={isOpen} hideModal={(value: boolean) => setIsOpen(value)} />
      <ArrayObjectInterface />
      <ArrayObject /> */}
      <Home />
    </div>
  );
}

export default App;
