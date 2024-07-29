import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { Profile } from "./components/Profile";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Social } from "./components/Social";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allData, setAllData] = useState({
    profile: "",
    education: "",
    skills: "",
    experience: "",
    social: "",
  });
  useEffect(() => {
    console.log(allData);
  }, [allData]);
  return (
    <>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 ? (
        <Profile setAllData={setAllData} />
      ) : activeIndex === 1 ? (
        <Education setAllData={setAllData} />
      ) : activeIndex === 2 ? (
        <Skills />
      ) : activeIndex === 3 ? (
        <Experience />
      ) : (
        <Social />
      )}
    </>
  );
}

export default App;
