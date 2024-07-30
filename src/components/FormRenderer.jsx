import { useState } from "react";
import { ExperienceForm } from "./ExperienceForm";
import { EducationForm } from "./EducationForm";
import { SkillsForm } from "./SkillsForm";
import { SocialsForm } from "./SocialsForm";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const FormRenderer = ({
  setAllData,
  activeIndex,
  formsArray,
  title,
}) => {
  const [forms, setForms] = useState(formsArray);

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
    toast.success("Changes saved successfully!");
  };

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
              form={form.data}
            />
          ) : activeIndex === 2 ? (
            <SkillsForm
              key={form.id}
              id={form.id}
              onChange={handleFormChange}
              form={form.data}
            />
          ) : activeIndex === 3 ? (
            <ExperienceForm
              key={form.id}
              id={form.id}
              onChange={handleFormChange}
              form={form.data}
            />
          ) : (
            <SocialsForm
              key={form.id}
              id={form.id}
              onChange={handleFormChange}
              form={form.data}
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
      <ToastContainer autoClose={2000} />
    </div>
  );
};
