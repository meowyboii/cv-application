import { useState, useEffect } from "react";
import { EducationForm } from "./EducationForm";

export const Education = ({ setAllData }) => {
  const [forms, setForms] = useState([]);

  const addForm = () => {
    setForms([...forms, { id: forms.length, data: {} }]);
  };

  const removeForm = () => {
    const newForms = forms.slice(0, -1);
    setForms(newForms);
  };

  const handleFormChange = (id, newData) => {
    const updatedForms = forms.map((form) =>
      form.id === id ? { ...form, data: newData } : form
    );
    setForms(updatedForms);
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllData((prevData) => ({
      ...prevData,
      education: forms,
    }));
  };
  useEffect(() => {
    addForm();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add your education details</h2>
        {forms.map((form) => (
          <EducationForm
            key={form.id}
            id={form.id}
            onChange={handleFormChange}
          />
        ))}
        <button onClick={addForm}>Add Education</button>
        <button onClick={removeForm} disabled={forms.length === 1}>
          Delete
        </button>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
