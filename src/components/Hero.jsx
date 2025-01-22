import React, {useEffect} from "react";
import Typed from "typed.js";
import {useTranslation} from "react-i18next";
import {getSwaggerData} from "./apiServer";
import CountUp from "react-countup";
import {Link} from "react-router-dom";
import {HashLink} from "react-router-hash-link";
import hero from "../assets/bitcoin.jpg";

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
  }, [el, t]);

  const [statistics, setStatistics] = React.useState(null);

  useEffect(() => {
    const fetchStatistics = async () => {
      try {
        const response = await getSwaggerData("statistics/");
        console.log(response);

        setStatistics(response);
      } catch (error) {
        console.error("Error fetching statistics:", error);
      }
    };

    fetchStatistics();
  }, []);

  return (
    <section
      id="hero"
      className=" flex  items-center justify-center min-h-screen ">
      <div className="container w-full mx-auto max-w-[1320px] px-5 isolate  md:mt-24 lg:mt-[148px]">
        <div className="flex flex-col md:flex-row items-center gap-10 justify-between lg:gap-10 pt-20 md:pt-0 ">
          <div className="  md:w-[55%] flex flex-col gap-4">
            <h1 className="text-[40px]  font-semibold lg:font-bold leading-[50px] lg:text-[60px] lg:leading-[65px] my-5 ">
              {t("hero.title")} <br />{" "}
              <span
                ref={el}
                className="text-yellow-500 min-w-[500px] lg:text-[50px]" style={{textShadow: "2px 2px 2px rgba(50, 50, 50, 0.4)"}}></span>
            </h1>
            <p className="lg:text-xl mb-5">{t("hero.info")}</p>
            <div className="btn_group   flex gap-2  flex-wrap mb-5">
              <Link
                to="/courseIntro"
                className="font-medium  transition-colors  bg-yellow-500  hover:bg-yellow-600 py-2.5 rounded-md px-8  text-gray-900">
                {t("hero.cta")}
              </Link>
              <HashLink
                to="/classes#contact"
                className="border border-gray-900 border-spacing-2 font-medium  transition-colors  hover:bg-yellow-500  bg-white py-2.5 rounded-md px-8 text-gray-900  hover:text-gray-900">
                {t("hero.cta2")}
              </HashLink>
            </div>
            <div className=" flex gap-10">
              <div className=" font-semibold">
                <CountUp
                  className="text-2xl lg:text-[30px] font-medium"
                  start={0}
                  end={statistics?.moduls}
                  duration={3}
                  separator=","
                />
                <p className="lg:text-lg">{t("hero.count.module")}</p>
              </div>
              <div className=" font-semibold">
                <CountUp
                  className="text-2xl lg:text-[30px] font-medium"
                  start={0}
                  end={statistics?.videos}
                  duration={3}
                  separator=","
                />
                <p className="lg:text-lg"> {t("hero.count.lesson")} </p>
              </div>
              <div className=" font-semibold">
                <CountUp
                  className="text-2xl lg:text-[30px] font-medium"
                  start={0}
                  end={statistics?.views}
                  duration={3}
                  separator=","
                />
                <p className="lg:text-lg">{t("hero.count.view")}</p>
              </div>
            </div>
          </div>
          <div className=" flex-1">
            <img
            loading="lazy" 
              src={hero}
              alt="hero image"
              className="rounded-3xl object-cover w-full"
            />
           
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
