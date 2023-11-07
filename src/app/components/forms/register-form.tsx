"use client";
import React, { useState } from "react";
import axios from "axios"; // Import Axios for making HTTP requests
import ErrorMsg from "../common/error-msg";
import Image from "next/image";
import icon from "@/assets/images/icon/icon_60.svg";

// Define the form data type
type IFormData = {
  fname: string;
  email: string;
  password: string;
};

const RegisterForm = () => {
  // State for showing/hiding the password
  const [showPass, setShowPass] = useState<boolean>(false);

  // State for form data
  const [formData, setFormData] = useState<IFormData>({
    fname: "",
    email: "",
    password: "",
  });

  // Handle form input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission
  const onSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      // Send a POST request to the backend endpoint with form data
      const response = await axios.post("http://localhost:8080/user/signup", {
        firstname: formData.fname, // Map form field to your backend model
        email: formData.email,
        password: formData.password,
      });

      // Handle the response, e.g., show success message or redirect
      alert("User created successfully");
    } catch (error) {
      alert((error as any).response.data.message)
      // Handle the error here, e.g., show an error message to the user
    }
  };
  return (
    <form onSubmit={onSubmit}>
      <div className="row">
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Name*</label>
            <input
              type="text"
              placeholder="James Brower"
              name="fname" // Change the name to "fname"
              value={formData.fname}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={"pls enter name"} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-25">
            <label>Email*</label>
            <input
              type="email"
              placeholder="james@example.com"
              name="email"
              value={formData.email}
              onChange={handleInputChange}
            />
            <div className="help-block with-errors">
              <ErrorMsg msg={"pls enter email"} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="input-group-meta position-relative mb-20">
            <label>Password*</label>
            <input
              type={`${showPass ? "text" : "password"}`}
              placeholder="Enter Password"
              className="pass_log_id"
              name="password"
              value={formData.password}
              onChange={handleInputChange}
            />
            <span
              className="placeholder_icon"
              onClick={() => setShowPass(!showPass)}
            >
              <span className={`passVicon ${showPass ? "eye-slash" : ""}`}>
                <Image src={icon} alt="pass-icon" />
              </span>
            </span>
            <div className="help-block with-errors">
              <ErrorMsg msg={"pls enter pass"} />
            </div>
          </div>
        </div>
        <div className="col-12">
          <div className="agreement-checkbox d-flex justify-content-between align-items-center">
            <div>
              <input type="checkbox" name="remember" />
              <label htmlFor="remember">
                By hitting the Register button, you agree to the{" "}
                <a href="#">Terms conditions</a> &{" "}
                <a href="#">Privacy Policy</a>
              </label>
            </div>
          </div>
        </div>
        <div className="col-12">
          <button
            type="submit"
            className="btn-eleven fw-500 tran3s d-block mt-20"
          >
            Register
          </button>
        </div>
      </div>
    </form>
  );
};

export default RegisterForm;
