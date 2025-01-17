import { FormRenderer } from "./FormRenderer";

export const Skills = ({ setAllData, allData, activeIndex }) => {
  return (
    <FormRenderer
      setAllData={setAllData}
      activeIndex={activeIndex}
      formsArray={allData.skill}
      title="skill"
    />
  );
};
