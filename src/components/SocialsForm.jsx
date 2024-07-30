import { useState } from "react";

export const SocialsForm = ({ id, onChange, form }) => {
  const [formData, setFormData] = useState(
    form || {
      social: "",
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
        id="social"
        name="social"
        placeholder="Social *"
        value={formData.social}
        onChange={handleChange}
        required
      />
    </>
  );
};
