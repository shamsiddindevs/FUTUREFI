import {
  FaTelegramPlane,

  FaYoutube,

} from "react-icons/fa";
import {Link} from "react-router-dom";
import {useTranslation} from "react-i18next";

import logo from "../assets/logo.png";
import { HashLink } from "react-router-hash-link";

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
            {t("footer.call_center")} +998(99)829-3303{" "}
          </p>
        </div>

        {/* Middle Section */}
        <div className="space-y-4 ">
          <h3 className="font-semibold text-lg mb-6">{t("footer.company")}</h3>
          <ul className="flex gap-6 text-gray-500">
            <li>
              <HashLink to="/courseIntro#" className="hover:text-yellow-500">{t("footer.company_names.0")}</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-yellow-500" to="/classes#">{t("footer.company_names.1")}</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-yellow-500" to="/#about">{t("footer.company_names.2")}</HashLink>
            </li>
            <li>
              <HashLink className="hover:text-yellow-500" to="/#">{t("footer.company_names.3")}</HashLink>
            </li>
          </ul>
        </div>

        {/* Right Section */}
        <div className="">
          <h3 className="font-semibold text-lg mb-2"> {t("footer.documents")} </h3>
          <div className="flex gap-6 mt-6 text-lg">
           <a href="https://t.me/+9cpRoGYBvqswZDky">
           <FaTelegramPlane className="text-gray-500 hover:text-blue-400 cursor-pointer" />
           </a>
          
           <a href="www.youtube.com/@FutureFiNetwork">
           <FaYoutube className="text-gray-500 hover:text-red-500 cursor-pointer" />
           </a>
           
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
