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
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 ">
        {/* Left Section */}
        <div>
          <Link
            to={"/"}
            className="flex items-center gap-2 mb-4">
            <img
              src={logo}
              alt="FUTUREFI
Network Logo"
              className="w-10 "
            />
            <span className=" font-medium leading-4 uppercase">
              <span className="text-sm leading-3">FUTUREFI</span> <br />
              Network
            </span>
          </Link>
          <p className="text-gray-500 ">
            {" "}
            {t("footer.call_center")} : +998 95 127 00 90{" "}
          </p>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 ">
          <h3 className="font-semibold text-lg mb-6">{t("footer.company")}</h3>
          <ul className="flex gap-6 text-gray-500   ">
            <li>
              <a href="#" className="hover:text-yellow-500">{t("footer.company_names.0")}</a>
            </li>
            <li>
              <a className="hover:text-yellow-500" href="#">{t("footer.company_names.1")}</a>
            </li>
            <li>
              <a className="hover:text-yellow-500" href="#">{t("footer.company_names.2")}</a>
            </li>
            <li>
              <a className="hover:text-yellow-500" href="#">{t("footer.company_names.3")}</a>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="">
          <h3 className="font-semibold text-lg mb-2">Social Links</h3>
          <div className="flex gap-6 mt-6 text-lg">
            <FaTelegramPlane className="text-gray-500 hover:text-blue-400 cursor-pointer" />
            <FaInstagram className="text-gray-500 hover:text-pink-500 cursor-pointer" />
            <FaYoutube className="text-gray-500 hover:text-red-500 cursor-pointer" />
            <FaFacebookF className="text-gray-500 hover:text-blue-600 cursor-pointer" />
          </div>
        </div>
      </div>

      <div className="mt-10 border-t pt-5 text-center text-gray-600">
        <p>&copy; 2025 FUTUREFI Network</p>
      </div>
    </footer>
  );
};

export default Footer;
