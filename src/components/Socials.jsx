import { FormRenderer } from "./FormRenderer";

export const Socials = ({ setAllData, allData, activeIndex }) => {
  return (
    <FormRenderer
      setAllData={setAllData}
      activeIndex={activeIndex}
      formsArray={allData.social}
      title="social"
    />
  );
};
