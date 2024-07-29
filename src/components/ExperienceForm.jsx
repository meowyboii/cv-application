import { useState } from "react";

export const ExperienceForm = ({ id, onChange }) => {
  const [formData, setFormData] = useState({
    company: "",
    position: "",
    responsibility: "",
    yearStarted: "",
    yearEnded: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    onChange(id, newData);
  };
  return (
    <>
      <h3>Practical Experience {id + 1}</h3>
      <input
        type="text"
        id="company"
        name="company"
        placeholder="Company Name *"
        value={formData.company}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="position"
        name="position"
        placeholder="Position Title *"
        value={formData.position}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="responsibility"
        name="responsibility"
        placeholder="Main Responsibilities *"
        value={formData.responsibility}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="yearStarted"
        name="yearStarted"
        placeholder="Year Started"
        value={formData.yearStarted}
        onChange={handleChange}
      />
      <input
        type="number"
        id="yearEnded"
        name="yearEnded"
        placeholder="Year Ended"
        value={formData.yearEnded}
        onChange={handleChange}
      />
    </>
  );
};
