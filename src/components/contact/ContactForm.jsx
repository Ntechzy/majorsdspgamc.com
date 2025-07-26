// src/components/forms/ContactForm.jsx
import React, { useState } from 'react';

const ContactForm = ({ onSubmit, submitStatus }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    subject: '',
    comments: '',
    saveInfo: false
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(formData, setFormData);
  };

  return (
    <div className="bg-white rounded-xl shadow-lg p-6 md:p-8">
      <h2 className="text-2xl md:text-3xl font-bold text-gray-800 mb-6 pb-2 border-b-2 border-[#fbb20e]">
        Get In Touch
      </h2>

      {submitStatus === 'success' && (
        <div className="bg-green-50 text-green-700 p-4 rounded-lg mb-6">
          Thank you for your message! We'll get back to you soon.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="bg-red-50 text-red-700 p-4 rounded-lg mb-6">
          There was an error submitting your form. Please try again.
        </div>
      )}

      <form onSubmit={handleSubmit}>
        <div className="space-y-4">
          {['name', 'phone', 'email', 'subject'].map((field) => (
            <div key={field}>
              <label htmlFor={field} className="block text-sm font-medium text-gray-700 mb-1">
                Your {field}
              </label>
              <input
                type={field === 'email' ? 'email' : field === 'phone' ? 'tel' : 'text'}
                id={field}
                name={field}
                value={formData[field]}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb20e] focus:border-[#fbb20e] outline-none transition"
              />
            </div>
          ))}

          <div>
            <label htmlFor="comments" className="block text-sm font-medium text-gray-700 mb-1">
              Your comments
            </label>
            <textarea
              id="comments"
              name="comments"
              rows="4"
              value={formData.comments}
              onChange={handleChange}
              required
              className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#fbb20e] focus:border-[#fbb20e] outline-none transition"
            ></textarea>
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
            <label htmlFor="saveInfo" className="ml-2 block text-sm text-gray-700">
              Save my name, email, and phone in this browser for the next time I comment.
            </label>
          </div>

          <button
            type="submit"
            disabled={submitStatus === 'submitting'}
            className="w-full bg-[#fbb20e] hover:bg-[#e6a00d] text-white font-bold py-3 px-4 rounded-lg shadow-md hover:shadow-lg transition-all disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {submitStatus === 'submitting' ? 'Sending...' : 'Send Message'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ContactForm;
