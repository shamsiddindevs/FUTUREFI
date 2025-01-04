
import {
  FaTelegramPlane,
  FaInstagram,
  FaYoutube,
  FaFacebookF,
} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import logo from "../assets/logo.png";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer className="bg-gray-100 py-10 px-5">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Left Section */}
        <div>
          <Link
            to={"/"}
            className="flex items-center gap-2 mb-10">
            <img
              src={logo}
              alt="Naqsh Academy Logo"
              className="w-10 h-10 object-cover"
            />
            <span className=" font-medium leading-4 uppercase">
              <span className="text-sm leading-3">FUTUREFI</span> <br />
              Network
            </span>
          </Link>
          <p className="text-gray-500 mt-2">
            {" "}
            {t("footer.call_center")} : +998 95 127 00 90{" "}
          </p>
          <div className="flex gap-4 mt-4">
            <FaTelegramPlane className="text-gray-500 hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="text-gray-500 hover:text-red-500 cursor-pointer" />
            <FaFacebookF className="text-gray-500 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 ">
          <h3 className="font-semibold text-lg mb-2">{t("footer.company")}</h3>
          <ul className="text-gray-500 space-y-2">
            <li>
              <a href="#">{t("footer.company_names.0")}</a>
            </li>
            <li>
              <a href="#">{t("footer.company_names.1")}</a>
            </li>
            <li>
              <a href="#">{t("footer.company_names.2")}</a>
            </li>
            <li>
              <a href="#">{t("footer.company_names.3")}</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="text-center mx-auto">
          <div className="flex justify-center items-center mx-auto w-28 h-32 bg-gray-300 ">
            <svg
              className="w-10 h-10 text-gray-200 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 16 20">
              <path d="M14.066 0H7v5a2 2 0 0 1-2 2H0v11a1.97 1.97 0 0 0 1.934 2h12.132A1.97 1.97 0 0 0 16 18V2a1.97 1.97 0 0 0-1.934-2ZM10.5 6a1.5 1.5 0 1 1 0 2.999A1.5 1.5 0 0 1 10.5 6Zm2.221 10.515a1 1 0 0 1-.858.485h-8a1 1 0 0 1-.9-1.43L5.6 10.039a.978.978 0 0 1 .936-.57 1 1 0 0 1 .9.632l1.181 2.981.541-1a.945.945 0 0 1 .883-.522 1 1 0 0 1 .879.529l1.832 3.438a1 1 0 0 1-.031.988Z" />
              <path d="M5 5V.13a2.96 2.96 0 0 0-1.293.749L.879 3.707A2.98 2.98 0 0 0 .13 5H5Z" />
            </svg>
          </div>
          <p className="text-gray-500 mt-2">
            {t("footer.documents")} :
          </p>
        </div>
      </div>

      <div className="mt-10 border-t pt-5 text-center text-gray-600">
        <p>{
            t("footer.address")
            }: {t("footer.location")}            </p>
        <p>&copy; 2025 FUTUREFI Network</p>
      </div>
    </footer>
  );
};

export default Footer;
