import { useState } from "react";
import "../styles/index.css";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

export const Profile = ({ setAllData }) => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    phone: "",
    address: "",
  });
  const [phoneNumber, setPhoneNumber] = useState("");
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
        />
        <input
          type="text"
          id="lastName"
          name="lastName"
          placeholder="Last Name"
          value={formData.lastName}
          onChange={handleChange}
        />
        <input
          type="text"
          id="address"
          name="address"
          placeholder="Address"
          value={formData.address}
          onChange={handleChange}
        />
        <PhoneInput
          id="phone"
          name="phone"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={handlePhoneChange}
        />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};
