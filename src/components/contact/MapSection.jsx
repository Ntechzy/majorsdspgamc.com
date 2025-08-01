import React from "react";

const MapSection = () => {
  return (
    <div className="flex flex-col items-center bg-white shadow-lg rounded-2xl p-6 max-w-4xl mx-auto my-10">

      <div className="w-full h-[400px] rounded-lg overflow-hidden">
        <iframe
          title="Naiminath College Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d908113.1788198057!2d78.91146252625563!3d27.240582361050407!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399e3002fa39fef9%3A0x2f4d08d951adeac1!2sMajor%20S.D.%20Singh%20PG%20Ayurvedic%20Medical%20College!5e0!3m2!1sen!2sin!4v1753355635339!5m2!1sen!2sin"  referrerpolicy="no-referrer-when-downgrade"
          width="100%"
          height="100%"
          loading="lazy"
          allowFullScreen
          className="border-0 w-full h-full"
        ></iframe>
      </div>
    </div>
  );
};

export default MapSection;
