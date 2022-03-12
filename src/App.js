import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { GlobalReset } from "./Global.styled";
import { Wrapp } from "./Wrapper.styled";

function App() {
  return (
    <>
      <GlobalReset />

      <Wrapp>
        <Navbar />
      </Wrapp>
    </>
  );
}

export default App;
