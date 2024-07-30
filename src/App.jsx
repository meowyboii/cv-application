import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { Profile } from "./components/Profile";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Socials } from "./components/Socials";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allData, setAllData] = useState({
    profile: "",
    education: [{ id: 0, data: {} }],
    skill: [{ id: 0, data: {} }],
    experience: [{ id: 0, data: {} }],
    social: [{ id: 0, data: {} }],
  });
  useEffect(() => {
    console.log(allData);
  }, [allData]);
  return (
    <>
      <Navbar activeIndex={activeIndex} setActiveIndex={setActiveIndex} />
      {activeIndex === 0 ? (
        <Profile setAllData={setAllData} allData={allData} />
      ) : activeIndex === 1 ? (
        <Education
          setAllData={setAllData}
          allData={allData}
          activeIndex={activeIndex}
        />
      ) : activeIndex === 2 ? (
        <Skills
          setAllData={setAllData}
          allData={allData}
          activeIndex={activeIndex}
        />
      ) : activeIndex === 3 ? (
        <Experience
          setAllData={setAllData}
          allData={allData}
          activeIndex={activeIndex}
        />
      ) : (
        <Socials
          setAllData={setAllData}
          allData={allData}
          activeIndex={activeIndex}
        />
      )}
    </>
  );
}

export default App;
