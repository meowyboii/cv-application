import { FormRenderer } from "./FormRenderer";

export const Education = ({ setAllData, allData, activeIndex }) => {
  return (
    <FormRenderer
      setAllData={setAllData}
      activeIndex={activeIndex}
      formsArray={allData.education}
      title="education"
    />
  );
};
