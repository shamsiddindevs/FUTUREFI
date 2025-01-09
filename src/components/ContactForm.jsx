import {useState} from "react";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {useTranslation} from "react-i18next";

const ContactForm = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const token = "YOUR_TELEGRAM_BOT_TOKEN";
    const chatId = "YOUR_CHAT_ID";
    const text = `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`;

    const url = `https://api.telegram.org/bot${token}/sendMessage`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          chat_id: chatId,
          text: text,
        }),
      });

      if (response.ok) {
        alert("Message sent successfully!");
        setFormData({name: "", email: "", message: ""});
      } else {
        alert("Failed to send message.");
      }
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Error sending message.");
    }
  };

  return (
    <div className="py-10">
      <div
        id="contact"
        className="w-full max-w-[1240px] mx-auto px-5">
        <h2 className="text-4xl font-bold mb-5 text-center">
          {t("contact.title")}
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10">
            <div className="flex flex-col items-center p-6 bg-white hover:shadow-xl transition-all duration-300 rounded-lg w-[210px] shadow-lg">
              <FaPhoneAlt className="text-yellow-500 text-5xl mb-4" />
              <h2 className="text-xl font-semibold">{t("contact.phone")}</h2>
              <p className="text-gray-600">+998 94 404 1744</p>
            </div>
            <div className="flex flex-col items-center p-6 bg-white hover:shadow-xl transition-all shadow-lg rounded-lg w-[210px]">
              <MdEmail className="text-yellow-500 text-5xl mb-4" />
              <h2 className="text-xl font-semibold">
                {t("contact.email_address")}
              </h2>
              <p className="text-gray-600">rasulmatovmuhammad</p>
            </div>
          </div>
          <div className="w-full max-w-lg bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold text-center mb-6">
              {t("contact.subtitle")}
            </h2>
            <form
              className="space-y-4"
              onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.name")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.email")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <textarea
                name="message"
                value={formData.message}
                onChange={handleChange}
                placeholder={t("contact.message")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <button
                type="submit"
                className="w-full p-3 bg-yellow-500 text-white font-bold rounded-lg hover:bg-yellow-600">
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
