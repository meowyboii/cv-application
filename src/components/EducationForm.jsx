import { useState } from "react";

export const EducationForm = ({ id, onChange }) => {
  const [formData, setFormData] = useState({
    course: "",
    completionYear: "",
    school: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    const newData = { ...formData, [name]: value };
    setFormData(newData);
    onChange(id, newData);
  };
  return (
    <>
      <h3>Education {id + 1}</h3>
      <input
        type="text"
        id="course"
        name="course"
        placeholder="Course Name *"
        value={formData.course}
        onChange={handleChange}
        required
      />
      <input
        type="number"
        id="completionYear"
        name="completionYear"
        placeholder="Completion Year *"
        value={formData.completionYear}
        onChange={handleChange}
        required
      />
      <input
        type="text"
        id="school"
        name="school"
        placeholder="School *"
        value={formData.school}
        onChange={handleChange}
        required
      />
    </>
  );
};
