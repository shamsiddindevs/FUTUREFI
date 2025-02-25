import {useState} from "react";
import logo from "../assets/logo.png";
import uzb from "../assets/uzb.png";
import eng from "../assets/eng.png";
import russian from "../assets/ru.png";

import {useTranslation} from "react-i18next";
import {HashLink} from "react-router-hash-link";

const Navbar = () => {
  const {i18n, t} = useTranslation();
  const lang = localStorage.getItem("language") || "uz"; // Get language from local storage

  const [overlay, setOverlay] = useState(true);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
    localStorage.setItem("language", lng); // Save language to local storage
    // Close dropdown after selection
    document.getElementById("language").classList.toggle("hidden"); // Close dropdown after selection
    window.location.reload();
  };

  const [isRotate, setIsRotate] = useState(false);

  const toggleLang = () => {
    setIsRotate(!isRotate);
  };
  return (
    <>
      <header className=" transition-colors fixed top-0 w-full z-[999] backdrop-blur-xl ">
        <div className=" w-full   px-5 py-5">
          <nav className="flex items-center justify-between">
            <HashLink
             
              to={"/#"}
              className="flex items-center gap-1">
              <img
                loading="lazy"
                src={logo}
                alt="Future Fi Network logo in Tashkent"
                className=" h-12  object-cover"
              />
              <span className=" font-medium leading-4 uppercase">
                <span className="text-sm leading-3">FUTUREFI</span> <br />
                Network
              </span>
            </HashLink>
            <div className="hidden lg:flex gap-1">
              <HashLink
             
                to="/#"
                className="nav_link">
                {t("nav.home")}
              </HashLink>
              <HashLink
                to="/#about"
                className="nav_link">
                {t("nav.about")}
              </HashLink>
              <HashLink
           
                to={"/classes#"}
                className="nav_link">
                {t("nav.online_classes")}
              </HashLink>
              <HashLink
             
                to={"/courseIntro#"}
                className="nav_link">
                {t("nav.online_courses")}
              </HashLink>
              <HashLink
             
                to="/#contact"
                className="nav_link">
                {t("nav.contact")}
              </HashLink>
            </div>
            <div className=" flex items-center gap-4 ">
              {/* Language Selector */}
              <div className="relative   block">
                <button
                  className="flex items-center  space-x-2 text-black focus:outline-none"
                  onClick={() => {
                    document
                      .getElementById("language")
                      .classList.toggle("hidden");
                    toggleLang();
                  }}>
                  <img
                  loading="lazy"
                    src={lang == "uz" ? uzb : lang == "ru" ? russian : eng}
                    alt="Language "
                    className="h-6"
                  />
                  {isRotate ? (
                    <svg
                    loading="lazy"
                      className="h-4 w-4"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  ) : (
                    <svg
                    loading="lazy"
                      className="h-4 w-4 rotate-180"
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg">
                      <path
                        fillRule="evenodd"
                        d="M5.23 7.21a.75.75 0 011.06.02L10 10.943l3.71-3.71a.75.75 0 011.08 1.04l-4.25 4.25a.75.75 0 01-1.08 0L5.21 8.29a.75.75 0 01.02-1.08z"
                        clipRule="evenodd"
                      />
                    </svg>
                  )}
                </button>
                <ul
                  id="language"
                  className="absolute  right-0 mt-2 w-14 bg-white shadow-lg rounded-md hidden ">
                  <li
                    onClick={() => changeLanguage("uz")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <img
                    loading="lazy"
                      src={uzb}
                      alt="uzbek flag in finance cource"
                      className="h-6"
                    />
                  </li>
                  <li
                    onClick={() => changeLanguage("ru")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <img
                    loading="lazy"
                      src={russian}
                      alt="russian flag image in finance cource"
                      className="h-6"
                    />
                  </li>
                  <li
                    onClick={() => changeLanguage("en")}
                    className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <img
                    loading="lazy"
                      src={eng}
                      alt="english flag in finance cource"
                      className="h-6"
                    />
                  </li>
                </ul>
              </div>
              <p className="hidden md:block font-semibold ">
                <span  className="text-yellow-700 text-base">99 </span>829 33 03
              </p>

              <button id="hamburgerMenu" aria-label="toggle menu"
                className="inline-flex lg:hidden items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-gray-200 hover:text-accent-foreground h-10 w-10 outline-none"
                onClick={() => setOverlay(!overlay)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-menu w-5 h-5">
                  <line
                    x1="4"
                    x2="20"
                    y1="12"
                    y2="12"></line>
                  <line
                    x1="4"
                    x2="20"
                    y1="6"
                    y2="6"></line>
                  <line
                    x1="4"
                    x2="20"
                    y1="18"
                    y2="18"></line>
                </svg>
              </button>
            </div>
          </nav>
        </div>
      </header>
      <div
        className={`fixed top-0 ${
          overlay ? "-left-full" : "left-0"
        }   w-full h-full  z-[9999] transition-all
`}>
        <div
          onClick={() => setOverlay(!overlay)}
          className=" absolute top-0 left-0 bg-black/40 z-40 overlay w-full h-full backdrop-blur-sm"></div>
        <div className=" relative z-50 w-4/5 h-full bg-slate-50">
          <div
            onClick={() => setOverlay(!overlay)}
            className="absolute top-1 right-1 bg-yellow-500 flex items-center justify-center w-10 h-10  rounded-full text-white ">
            X
          </div>
          <div className="flex py-12 flex-col gap-1">
            <HashLink
           
              onClick={() => setOverlay(!overlay)}
              href="/#"
              className="nav_link">
              {t("nav.home")}
            </HashLink>
            <HashLink
           
              onClick={() => setOverlay(!overlay)}
              to="/#about"
              className="nav_link">
              {t("nav.about")}
            </HashLink>
            <HashLink
           
              onClick={() => setOverlay(!overlay)}
              to={"/classes/#"}
              className="nav_link">
              {t("nav.online_classes")}
            </HashLink>
            <HashLink
           
              onClick={() => setOverlay(!overlay)}
              className="nav_link"
              to={"/courseIntro"}>
              {t("nav.online_courses")}
            </HashLink>
            <HashLink
           
              onClick={() => setOverlay(!overlay)}
              to="/#contact"
              className="nav_link">
              {t("nav.contact")}
            </HashLink>
            <p className="font-semibold md:hidden nav_link gap-1 ">
              <span className="text-yellow-500">99</span>829 33 03
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
