import { useState, useEffect } from "react";
import { Navbar } from "./components/Navbar";
import "./styles/App.css";
import { Profile } from "./components/Profile";
import { Education } from "./components/Education";
import { Skills } from "./components/Skills";
import { Experience } from "./components/Experience";
import { Socials } from "./components/Socials";
import { Resume } from "./components/Resume";

function App() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [allData, setAllData] = useState({
    profile: "",
    education: [],
    skill: [],
    experience: [],
    social: [],
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
      ) : activeIndex === 4 ? (
        <Socials
          setAllData={setAllData}
          allData={allData}
          activeIndex={activeIndex}
        />
      ) : (
        <Resume allData={allData} />
      )}
    </>
  );
}

export default App;
