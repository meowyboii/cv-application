import { useState } from "react";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  return (
    <>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
    </>
  );
}

export default App;
