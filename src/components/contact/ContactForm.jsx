// src/components/forms/ContactForm.jsx
import React, { useState } from "react";

const ContactForm = ({ onSubmit, submitStatus }) => {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    subject: "",
    comments: "",
    saveInfo: false,
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const newErrors = {};

    if (!formData.name.trim()) {
      newErrors.name = "Name is required.";
    } else if (formData.name.length < 3) {
      newErrors.name = "Name must be at least 3 characters.";
    }

    if (!formData.phone.trim()) {
      newErrors.phone = "Phone number is required.";
    } else if (!/^[0-9]{10}$/.test(formData.phone)) {
      newErrors.phone = "Enter a valid 10-digit phone number.";
    }

    if (!formData.email.trim()) {
      newErrors.email = "Email is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Enter a valid email address.";
    }

    if (!formData.subject.trim()) {
      newErrors.subject = "Subject is required.";
    }

    if (!formData.comments.trim()) {
      newErrors.comments = "Please enter your message.";
    } else if (formData.comments.length < 10) {
      newErrors.comments = "Message must be at least 10 characters.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));

    // Clear error on change
    setErrors((prev) => ({
      ...prev,
      [name]: "",
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) {
      onSubmit(formData, setFormData);
    }
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e]">
        Get In Touch
      </h2>

      {submitStatus === "success" && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitStatus === "error" && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
          There was an error submitting your form. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit} noValidate>
        <div className="space-y-4">
          {["name", "phone", "email", "subject"].map((field) => (
            <div key={field}>
              <label
                htmlFor={field}
                className="block text-sm font-medium text-gray-700 mb-1"
              >
                Your {field}
              </label>
              <input
                type={
                  field === "email"
                    ? "email"
                    : field === "phone"
                    ? "tel"
                    : "text"
                }
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                className={`w-full px-4 py-2 border ${
                  errors[field] ? "border-red-500" : "border-gray-300"
                } rounded-lg focus:ring-2 focus:ring-[#fbb20e] focus:border-[#fbb20e] outline-none transition`}
              />
              {errors[field] && (
                <p className="text-red-500 text-sm mt-1">{errors[field]}</p>
              )}
            </div>
          ))}

          <div>
            <label
              htmlFor="comments"
              className="block text-sm font-medium text-gray-700 mb-1"
            >
              Your comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              className={`w-full px-4 py-2 border ${
                errors.comments ? "border-red-500" : "border-gray-300"
              } rounded-lg focus:ring-2 focus:ring-[#fbb20e] focus:border-[#fbb20e] outline-none transition`}
            ></textarea>
            {errors.comments && (
              <p className="text-red-500 text-sm mt-1">{errors.comments}</p>
            )}
          </div>

          <div className="flex items-center">
            <input
              type="checkbox"
              id="saveInfo"
              name="saveInfo"
              checked={formData.saveInfo}
              onChange={handleChange}
              className="h-4 w-4 text-[#fbb20e] focus:ring-[#fbb20e] border-gray-300 rounded"
            />
            <label
              htmlFor="saveInfo"
              className="ml-2 block text-sm text-gray-700"
            >
              Save my name, email, and phone in this browser for the next time I
              comment.
            </label>
          </div>

          <button
            type="submit"
            disabled={submitStatus === "submitting"}
            className="w-full bg-[#fbb20e] hover:bg-[#e6a00d] text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitStatus === "submitting" ? "Sending..." : "Send Message"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
