import ContactForm from '../components/contact/ContactForm';
import ContactInformation from '../components/contact/ContactInformation';
import { useState } from 'react';
import PageBanner from '../components/shared/PageBanner';
import MapSection from '../components/contact/MapSection'
import NewsletterSection from '../components/shared/NewsletterSection';

const Contact = () => {
  const [submitStatus, setSubmitStatus] = useState(null);

  const handleFormSubmit = async (formData, resetForm) => {
    setSubmitStatus('submitting');
    try {
      const response = await fetch('https://your-api-endpoint.com/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmitStatus('success');
        resetForm({
          name: '',
          phone: '',
          email: '',
          subject: '',
          comments: '',
          saveInfo: false,
        });
      } else {
        throw new Error('Submission failed');
      }
    } catch (err) {
      console.error(err);
      setSubmitStatus('error');
    }
  };

  return (
    <>
    <PageBanner title="Contact" path={['Contact']} />
    <div className="bg-gray-50">
    <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <ContactForm onSubmit={handleFormSubmit} submitStatus={submitStatus} />
        <ContactInformation/>
      </div>
       <MapSection/>
    </div>
    <NewsletterSection/>
    </div>
    </>
  );
};

export default Contact;