import {useState, useEffect} from "react";
import {Link} from "react-router-dom";
import {FaChevronUp, FaChevronDown} from "react-icons/fa";
import {getSwaggerData} from "../components/apiServer";
import {t} from "i18next";
import bgvideo from "../assets/bgvideo.mp4"
import video from "../assets/video-time-icon.svg"
import ques from "../assets/quiz-icon.svg"

const CourseIntro = () => {
  const [modules, setModules] = useState([]);

  useEffect(() => {
    getSwaggerData("moduls/").then((data) => {
      setModules(data.map((module) => ({...module, expanded: false})));
      console.log(data);
    });
  }, []);

  const toggleModule = (id) => {
    setModules(
      modules.map((module) =>
        module.id === id ? {...module, expanded: !module.expanded} : module
      )
    );
  };

  return (
    <>
      <section className="relative mt-[88px]  overflow-hidden">
        {/* Background Video */}
        <video
          autoPlay
          muted
          loop
          className="absolute top-0 left-0 w-full h-full object-cover">
          <source
            src={bgvideo} // Replace with your video URL
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>

        {/* Overlay */}
        <div
          className="absolute inset-0 bg-black bg-opacity-60"
          aria-hidden="true"></div>

        {/* Content */}
        <div className="relative container max-w-[1320px] mx-auto px-5">
          <h1 className="text-5xl font-semibold mt-20  pt-32 pb-48 text-white">
            {t("course.title")}
          </h1>
        </div>
      </section>

      <section className="py-10 bg-slate-100">
        <div className="w-full max-w-[1320px] mx-auto px-5">
          <h2 className="text-xl py-6 font-normal text-gray-500"> {t("course.left")}</h2>
          <h3 className="text-4xl py-10 font-bold text-center text-gray-700">
            {" "}
            {t("course.center")}
          </h3>

          <div className=" bg-gray-100">
            {modules.map((module) => (
              <div
                key={module.id}
                className="mb-8 bg-white p-6 rounded-lg shadow-lg ">
                <div className="flex items-center justify-between">
                  <h2 className="text-lg md:text-xl lg:text-2xl font-semibold">
                    {module.name}
                  </h2>
                  <button
                    className="text-yellow-500 font-bold"
                    onClick={() => toggleModule(module.id)}>
                    {module.expanded ? <FaChevronUp /> : <FaChevronDown />}
                  </button>
                </div>
                {module.expanded && (
                  <div className="mt-4 flex gap-10 items-center flex-wrap ">
                    <img
                      loading="lazy"
                      src={module.image || "https://picsum.photos/200/300"}
                      alt={module.title}
                      className="h-80 rounded-xl object-cover"
                    />
                    <div className="flex flex-col gap-10">
                      <div>
                        <h2 className="card-title text-2xl font-bold mb-2">
                          {module.name}
                        </h2>
                        <p className="text-gray-600">{module.description}</p>
                      </div>

                      <div className="flex items-end justify-between gap-10">
                        <div className="flex flex-col gap-2">
                          <p className="flex items-center gap-2">
                            <img className="-ml-1" src={video} alt=" video icon" />
                            <strong>{t("course.courseIntro.videos")}:</strong> {module.videos_count}
                          </p>
                          <p className="flex items-center gap-2">
                            <img className="ml-0" src={ques} alt="quiz icon" />
                            <strong>{t("course.courseIntro.tests")}:</strong> {module.questions_count}
                          </p>
                        </div>
                        <div className="info_group flex flex-wrap gap-4 items-center justify-between">
                          <Link
                            to={`/courses/${module.id}`}
                            className="btn btn-md btn-primary">
                            {t("course.courseIntro.start")}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default CourseIntro;
