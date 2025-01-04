import React from "react";
import { useTranslation } from "react-i18next";

const BusinessFinanceTraining = () => {
  const { t } = useTranslation();
  return (
    // Business and Finance Training Section
    <div id="about" className="py-20 ">
      <div className="lg:pt-10 pb-24">
        <div className="container mx-auto max-w-7xl px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center  lg:gap-6 gap-10  ">
            {/* Left Section */}
            <div className="">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                {t("why_choose_us.title")}
              </h1>
              <p className="text-md lg:text-lg text-gray-700">
                {t("why_choose_us.info")}
              </p>
            </div>

            {/* Right Section (Image) */}
            <div className=" flex md:justify-end ">
              <div className=" flex items-center justify-center w-full h-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End of Business and Finance Training Section */}

      {/* Practice using real-life scenarios */}
      <div className="pb-24">
        <div className="container mx-auto max-w-7xl px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center  lg:gap-6 gap-10  ">
            {/* Left Section */}

            {/* Right Section (Image) */}
            <div className="order-2 md:order-1  flex justify-start">
              <div className=" skeleton flex items-center justify-center w-full h-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>

            <div className=" order-1 md:order-2    ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                {t("financial_literacy.title")}
              </h1>
              <p className="text-md lg:text-lg text-gray-700">
                {t("financial_literacy.info")}
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* End of Practice using real-life scenarios */}

      {/* Learn from the best */}
      <div className="pb-24">
        <div className="container mx-auto max-w-7xl px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center  lg:gap-6 gap-10  ">
            {/* Left Section */}
            <div className="  ">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                {" "}
               {t("understanding_finance.title")}
              </h1>
              <p className="text-md lg:text-lg text-gray-700">
                {t("understanding_finance.info")}
              </p>
            </div>

            {/* Right Section (Image) */}
            <div className=" flex md:justify-end">
            <div className=" skeleton flex items-center justify-center w-full h-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
                <svg
                  className="w-10 h-10 text-gray-200 dark:text-gray-600"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18">
                  <path d="M18 0H2a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2Zm-5.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3Zm4.376 10.481A1 1 0 0 1 16 15H4a1 1 0 0 1-.895-1.447l3.5-7A1 1 0 0 1 7.468 6a.965.965 0 0 1 .9.5l2.775 4.757 1.546-1.887a1 1 0 0 1 1.618.1l2.541 4a1 1 0 0 1 .028 1.011Z" />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* End of Learn from the best */}

      {/* about of Ceo */}

      <div className="lg:pb-10">
        <div className="container mx-auto max-w-7xl px-5 ">
          <div className="grid grid-cols-1 md:grid-cols-2 justify-between items-center  lg:gap-6 gap-10  ">
            {/* Right Section (Image) */}
            <div className="order-2 md:order-1 flex justify-start">
            <div className=" skeleton flex items-center justify-center w-full h-60 bg-gray-300 rounded sm:w-96 dark:bg-gray-700">
            <svg className="w-12 h-12 text-gray-200 dark:text-gray-700 me-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10 0a10 10 0 1 0 10 10A10.011 10.011 0 0 0 10 0Zm0 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6Zm0 13a8.949 8.949 0 0 1-4.951-1.488A3.987 3.987 0 0 1 9 13h2a3.987 3.987 0 0 1 3.951 3.512A8.949 8.949 0 0 1 10 18Z"/>
        </svg>
              </div>
            </div>

            {/* Left Section */}
            <div className="order-1 md:order-2 ">
              <h4 className="text-md mb-2 text-yellow-500">
                {t("ceo_message.subtitle")}
              </h4>
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-semibold mb-4">
                {" "}
               {t("ceo_message.title")}
              </h1>
              <p className="text-md lg:text-lg text-gray-700">
                {t("ceo_message.info")}
              </p>
            </div>
          </div>
        </div>
      </div>
      {/* End of about of Ceo */}
    </div>
  );
};

export default BusinessFinanceTraining;
