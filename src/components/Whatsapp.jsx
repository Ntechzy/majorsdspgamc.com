import React, { useState } from 'react';

const WhatsAppButton = () => {
    const [isOpen, setIsOpen] = useState(false);

    const togglePopup = () => {
        setIsOpen(!isOpen);
    };

    const phoneNumber = "7300864280";
    const message = "Hello";

    return (
        <>
            {/* WhatsApp Button */}
            <div
                onClick={togglePopup}
                className="fixed bottom-6 right-6 z-50 bg-green-500 rounded-full w-12 h-12 md:w-16 md:h-16 flex items-center justify-center shadow-lg cursor-pointer"
            >
                <img
                    src="https://img.icons8.com/?size=100&id=QkXeKixybttw&format=png&color=000000"
                    alt="WhatsApp"
                    className="w-7 h-7 md:w-10 md:h-10"
                />
            </div>

            {/* Popup */}
            {isOpen && (
                <div className="fixed bottom-24 right-6 z-40 bg-white p-4 rounded-lg shadow-xl w-64">
                    <p className="mb-2">
                        Message: <span className="font-medium">{message}</span>
                    </p>
                    <a
                        href={`https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-block bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 transition"
                    >
                        Send on WhatsApp
                    </a>
                </div>
            )}
        </>
    );
};

export default WhatsAppButton;

