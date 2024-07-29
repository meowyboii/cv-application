import { FormRenderer } from "./FormRenderer";

export const Education = ({ setAllData, activeIndex }) => {
  return (
    <FormRenderer
      setAllData={setAllData}
      activeIndex={activeIndex}
      title="education"
    />
  );
};
