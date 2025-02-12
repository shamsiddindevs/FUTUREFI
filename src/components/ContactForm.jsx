import {useState} from "react";
import {FaPhoneAlt} from "react-icons/fa";
import {MdEmail} from "react-icons/md";
import {useTranslation} from "react-i18next";
import toast from "react-hot-toast";

const ContactForm = () => {
  const {t} = useTranslation();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    subject: "Feedback",
    rate: 5,
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };
  
  const BASE_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();
    const url = `${BASE_URL}/en/api/v1/feedbacks/`;

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: formData.name,
          rate: formData.rate,
          email:formData.email,
          subject:formData.subject,
          message: formData.message,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!", {
          style: {
            padding: "16px",
            backgroundColor: "green",
            color: "white",
            fontSize: "20px",
          },
        });
        setFormData({name: "", email: "", message: "",subject:"Feedback" , rate: 5});
      } else {
        toast.warn("Failed to send message.", {
          style: {
            padding: "16px",
          },
        });
      }
    } catch (error) {
      console.error("Error sending message:", error);
      toast.error("Error sending message.", {
        style: {
          padding: "16px",
        },
      });
    }
  };

  return (
    <div className="py-10">
      <div
        id="contact"
        className="w-full max-w-[1320px] mx-auto px-5">
        <h2 className="text-4xl font-bold mb-5 text-center">
          {t("contact.title")}
        </h2>
        <div className="flex flex-col justify-center items-center">
          <div className="flex flex-col md:flex-row justify-center items-center gap-8 p-10">
            <div className="flex flex-col items-center p-6 bg-white hover:shadow-xl transition-all duration-300 rounded-lg w-[250px] shadow-lg">
              <FaPhoneAlt className="text-yellow-500 text-5xl mb-4" />
              <h2 className="text-xl font-semibold">{t("contact.phone")}</h2>
              <a aria-label="telephone number" href={`tel:+998998293303`} className="text-gray-600 hover:opacity-70">+998 (99) 829-3303</a>
            </div>
            <div className="flex flex-col items-center p-6 bg-white hover:shadow-xl transition-all shadow-lg rounded-lg w-[250px]">
              <MdEmail className="text-yellow-500 text-5xl mb-4" />
              <h2 className="text-xl font-semibold">
                {t("contact.email_address")}
              </h2>
              <a aria-label="Email address" href={`mailto:info@futurefinetwork.org`}  className="text-gray-600">info@futurefinetwork.org</a>
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
                required
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder={t("contact.name")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              <input
                required
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder={t("contact.email")}
                className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
              
              <textarea
              required
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
