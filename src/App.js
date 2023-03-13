import "./App.css";
import DOMRef from "./hooks/DOMRef";
import Ref from "./hooks/Ref";
import Timer from "./hooks/Timer";

function App() {
  return (
    <div className="App">
      {/* <Ref />
      <Timer/> */}
      <DOMRef/>
    </div>
  );
}

export default App;
