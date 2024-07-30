import { useState } from "react";

export const SkillsForm = ({ id, onChange, form }) => {
  const [formData, setFormData] = useState(
    form || {
      skill: "",
    }
  );

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    onChange(id, newData);
  };
  return (
    <>
      <input
        type="text"
        id="skill"
        name="skill"
        placeholder="Skill *"
        value={formData.skill}
        onChange={handleChange}
        required
      />
    </>
  );
};
