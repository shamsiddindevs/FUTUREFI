import React, {useEffect} from "react";
import Typed from "typed.js";
import {useTranslation} from "react-i18next";

const Hero = () => {
  const {t} = useTranslation();
  const el = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: [
        t("hero.subtitle.fn"),
        t("hero.subtitle.ff"),
        t("hero.subtitle.fc"),
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, [ el, t]);

  return (
    <section
      id="hero "
      className=" mb-20 py-5">
      <div className="container w-full mx-auto max-w-7xl px-5 isolate  ">
        <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10 lg:gap-20">
          <div className="lg:min-h-[448px] flex flex-col gap-4">
            <h1 className="text-[40px]  font-semibold leading-[50px] lg:text-[45px] lg:leading-[50px] my-5">
              {t("hero.title")} <br />{" "}
              <span
                ref={el}
                className="text-yellow-500 min-w-[500px]"></span>
            </h1>
            <p>{t("hero.info")}</p>
            <div className="btn_group   flex gap-2  flex-wrap">
              <a
                href="#"
                className="font-medium  transition-colors  bg-yellow-500  hover:bg-yellow-600 py-2.5 rounded-md px-8  btn_text">
                {t("hero.cta")}
              </a>
              <a
                href="#"
                className="border border-yellow-500 border-spacing-2 font-medium  transition-colors  hover:bg-yellow-500  bg-white py-2.5 rounded-md px-8 text-yellow-500  hover:btn_text">
                {t("hero.cta2")}
              </a>
            </div>
            <div className=" flex gap-10">
              <div className="text-center">
                <h3 className="text-[30px] font-medium">45+</h3>
                <p className="text-md">{t("hero.count.module")}</p>
              </div>
              <div className="text-center">
                <h3 className="text-[30px] font-medium">5+</h3>
                <p className="text-md"> {t("hero.count.lesson")} </p>
              </div>
              <div className="text-center">
                <h3 className="text-[30px] font-medium">1200+</h3>
                <p className="text-md">{t("hero.count.view")}</p>
              </div>
            </div>
          </div>
          <div className="skeleton min-h-[348px] bg-yellow-300  w-full max-w-[500px] rounded-xl flex items-center justify-center">
            {/* <img src={hero} alt="hero image" className="rounded-3xl object-cover " /> */}
            <svg
              className="w-12 h-12 text-yellow-100 dark:text-gray-600"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 18">
              <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
            </svg>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
