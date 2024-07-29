import { useState, useEffect } from "react";
import { ExperienceForm } from "./ExperienceForm";
import { EducationForm } from "./EducationForm";

export const FormRenderer = ({ setAllData, activeIndex, title }) => {
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
      [title]: forms,
    }));
  };
  useEffect(() => {
    addForm();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h2>Add your {title} details</h2>
        {forms.map((form) =>
          activeIndex === 1 ? (
            <EducationForm
              key={form.id}
              id={form.id}
              onChange={handleFormChange}
            />
          ) : (
            <ExperienceForm
              key={form.id}
              id={form.id}
              onChange={handleFormChange}
            />
          )
        )}
        <div>
          <button onClick={addForm} type="button" className="form-button">
            Add {title}
          </button>
          <button
            onClick={removeForm}
            type="button"
            disabled={forms.length === 1}
            className="form-button"
          >
            Delete
          </button>
          <button type="submit" className="form-button">
            Save Changes
          </button>
        </div>
      </form>
    </div>
  );
};
