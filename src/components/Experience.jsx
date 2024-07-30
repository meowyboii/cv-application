import { FormRenderer } from "./FormRenderer";

export const Experience = ({ setAllData, allData, activeIndex }) => {
  return (
    <FormRenderer
      setAllData={setAllData}
      activeIndex={activeIndex}
      formsArray={allData.experience}
      title="experience"
    />
  );
};
