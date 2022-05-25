import "./App.css";
import FormValidation from "./components/FormValidation";
import LayoutDesign from "./components/LayoutDesign";
import Website from "./components/Website";
import InterfaceDemo from "./components/InterfaceDemo";

function App() {
  return (
    <div className="App">
      {/* <Website /> */}
      {/* <LayoutDesign /> */}
      {/* <FormValidation /> */}
      <InterfaceDemo name={"vandna"} color={"red"} age={45} status="single" />
      <InterfaceDemo name={"vandna"} color={"red"} age={45} status="single">
        salary=50000k
      </InterfaceDemo>
    </div>
  );
}

export default App;
