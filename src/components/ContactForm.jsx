import React from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
import { useTranslation } from 'react-i18next';


const ContactForm = () => {
    const { t } = useTranslation();
    return (
       <div className="py-20 " >
        <div id='contact' className="w-full max-w-7xl mx-auto px-5">
        <h2 className="text-4xl font-bold mb-10 text-center">
            {t("contact.title")}
        </h2>
        <div className="flex flex-col justify-center items-center min-h-screen ">
            {/* {contact icons} */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10 ">
            {/* Phone Card */}
            <div className="flex flex-col items-center p-6 bg-white hover:shadow-xl transition-all duration-300 rounded-lg w-[210px] shadow-lg">
                <FaPhoneAlt className="text-yellow-500 text-5xl mb-4" />
                <h2 className="text-xl font-semibold">
                    {t("contact.phone")}
                </h2>
                <p className="text-gray-600">+998 94 404 1744</p>
            </div>

            {/* Email Card */}
            <div className="flex flex-col items-center p-6 bg-white hover:shadow-xl transition-all shadow-lg rounded-lg w-[210px] ">
                <MdEmail className="text-yellow-500 text-5xl mb-4" />
                <h2 className="text-xl font-semibold">
                    {t("contact.email_address")}
                </h2>
                <p className="text-gray-600">rasulmatovmuhammad</p>
            </div>
        </div>
            {/* Contact Form */}
            <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
                <h2 className="text-2xl font-bold text-center mb-6">
                    {t("contact.subtitle")}
                </h2>

                <form className="space-y-4">
                    {/* Name Input */}
                    <input
                        type="text"
                        placeholder={t("contact.name")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    {/* Email Input */}
                    <input
                        type="email"
                        placeholder={t("contact.email")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    {/* Message Input */}
                    <textarea
                        placeholder={t("contact.message")}
                        className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
                    />

                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full p-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600"
                    >
                      {t("contact.send")}
                    </button>
                </form>
            </div>
        </div>
        </div>
       </div>
    );
};

export default ContactForm;
