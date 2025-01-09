import onlineClass from "../assets/online-class.png";
import onlineCourse from "../assets/online-course.png";
import career from "../assets/career.png";

import {useTranslation} from "react-i18next";

const StudentProfiles = () => {
  const {t} = useTranslation();
  return (
    <section className="py-10  text-center ">
      <h2 className="text-4xl font-bold mb-10">{t("what_we_offer.title")}</h2>

      <div className="w-full max-w-[1240px] px-5 mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* University Students Card */}
        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-500">
          <div className="text-blue-500 text-5xl mb-4">
            <img
              src={onlineClass}
              className="w-12 mx-auto"
              alt="onlineClass"
            />
          </div>
          <h3 className="text-xl font-semibold">
            {t("what_we_offer.cards.0.title")}
          </h3>
          <p className="mt-4 text-gray-700 text-center">
            {t("what_we_offer.cards.0.message")}
          </p>
        </div>

        {/* Working Professionals Card */}
        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-500">
          <div className="text-orange-500 text-5xl mb-4">
            <img
              src={onlineCourse}
              className="w-12 mx-auto"
              alt="onlineClass"
            />
          </div>
          <h3 className="text-xl font-semibold">
            {t("what_we_offer.cards.1.title")}
          </h3>
          <p className="mt-4 text-gray-700 text-center">
            {t("what_we_offer.cards.1.message")}
          </p>
        </div>

        {/* Career Switcher Card */}
        <div className="p-8 bg-white rounded-lg shadow-lg border-t-4 border-yellow-500">
          <div className="text-green-500 text-5xl mb-4">
            <img
              src={career}
              className="w-12 mx-auto"
              alt="onlineClass"
            />
          </div>
          <h3 className="text-xl font-semibold">
            {t("what_we_offer.cards.2.title")}
          </h3>
          <p className="mt-4 text-gray-700 text-center">
            {t("what_we_offer.cards.2.message")}
          </p>
        </div>
      </div>
    </section>
  );
};

export default StudentProfiles;
