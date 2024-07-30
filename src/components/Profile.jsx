import { useState } from "react";
import "../styles/index.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export const Profile = ({ setAllData, allData }) => {
  const [formData, setFormData] = useState({
    firstName: allData.profile.firstName,
    lastName: allData.profile.lastName,
    phone: allData.profile.phone,
    address: allData.profile.address,
  });
  const [phoneNumber, setPhoneNumber] = useState(allData.profile.phone);
  const handlePhoneChange = (phone) => {
    setPhoneNumber(phone);
    handleChange({ target: { name: "phone", value: phone } });
  };

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };
  const handleSubmit = (event) => {
    event.preventDefault();
    setAllData((prevData) => ({
      ...prevData,
      profile: formData,
    }));
    toast.success("Changes saved successfully!");
  };
  return (
    <div className="section-container">
      <form onSubmit={handleSubmit}>
        <h2>Add your profile details</h2>
        <input
          type="text"
          id="firstName"
          name="firstName"
          placeholder="First Name"
          value={formData.firstName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
          required
        />
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
          required
        />
        <PhoneInput
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneChange}
          required
        />
        <button type="submit" className="form-button">
          Save Changes
        </button>
      </form>
      <ToastContainer autoClose={2000} />
    </div>
  );
};
