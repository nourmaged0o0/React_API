import React, { useState } from "react";
import "./Form.css";
import axios from "axios";

const Form = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    university: "",
    university_level: "",
    course: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value
    }));
  };

  const submit = (e) => {
    e.preventDefault(); 

    axios
      .post("https://fake-form.onrender.com/api/students/addStudent", form)
      .then((response) => {
        console.log(response.data);
        console.log(response.status);
      })
      .catch((error) => {
        console.error("Error submitting form:", error);
      });

    setForm({
      name: "",
      email: "",
      phone: "",
      university: "",
      university_level: "",
      course: ""
    });
  };

  return (
    <>
      <form onSubmit={submit}>
        <div className="mainForm">
          <h1 className="cautionH">Cautions</h1>
          <p className="cautionP">
            Be sure to check your E-mail after submitting the form!
          </p>

          <label htmlFor="name">Name</label>
          <input type="text" name="name" id="name" value={form.name} onChange={handleChange} required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" id="email" value={form.email} onChange={handleChange} required />

          <label htmlFor="phone">Phone</label>
          <input type="text" name="phone" id="phone" value={form.phone} onChange={handleChange} required />

          <label htmlFor="university">University</label>
          <select name="university" id="university" value={form.university} onChange={handleChange} required>
            <option value="">Select an option:</option>
            <option value="Cairo">Cairo</option>
            <option value="Ain Shams">Ain Shams</option>
            <option value="Helwan">Helwan</option>
            <option value="Other">Other</option>
          </select>

          <label htmlFor="university_level">University Level</label>
          <select name="university_level" id="university_level" value={form.university_level} onChange={handleChange} required>
            <option value="">Select an option:</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
          </select>

          <label htmlFor="course">Course</label>
          <select name="course" id="course" value={form.course} onChange={handleChange} required>
            <option value="">Select an option:</option>
            <option value="C++">C++</option>
            <option value="OOP">OOP</option>
            <option value="Flutter">Flutter</option>
            <option value="DS & Algorithms">DS & Algorithms</option>
            <option value="UI/UX">UI/UX</option>
          </select>

          <button type="submit">Submit</button>
        </div>
      </form>
    </>
  );
};

export default Form;
