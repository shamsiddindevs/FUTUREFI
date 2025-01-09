import {useState} from "react";
import {useEffect} from "react";

import {FaArrowRight, FaArrowDown} from "react-icons/fa";
import {getSwaggerData} from "../components/apiServer";
import { Link } from "react-router-dom";

const Courses = () => {
  const [modules, setModules] = useState(null);

  useEffect(() => {
    getSwaggerData("moduls/").then((data) => {
      setModules(data);
      console.log(data);
    });
  }, []);

  const toggleModule = (id) => {
    setModules(
      modules.map((module) => {
        if (module.id === id) {
          return {...module, expanded: !module?.expanded};
        }
        return module;
      })
    );
  };

  useEffect(() => {
    if (
      modules &&
      modules.every((module) =>
        module.videos.every((video) => !video.isPlaying)
      )
    ) {
      setModules(
        modules.map((module, moduleIndex) => {
          if (moduleIndex === 0 && module.videos.length > 0) {
            return {
              ...module,
              videos: module.videos.map((video, videoIndex) => ({
                ...video,
                isPlaying: videoIndex === 0,
              })),
            };
          }
          return module;
        })
      );
    }
  }, [modules]);

  const playNextVideo = (currentModuleId, currentVideoId) => {
    setModules(
      modules.map((module) => {
        if (module.id === currentModuleId) {
          const currentVideoIndex = module.videos.findIndex(
            (video) => video.id === currentVideoId
          );
          const nextVideoIndex = (currentVideoIndex + 1) % module.videos.length;
          return {
            ...module,
            videos: module.videos.map((video, index) => ({
              ...video,
              isPlaying: index === nextVideoIndex,
            })),
          };
        }
        return module;
      })
    );
  };

  const playPrevVideo = (currentModuleId, currentVideoId) => {
    setModules(
      modules.map((module) => {
        if (module.id === currentModuleId) {
          const currentVideoIndex = module.videos.findIndex(
            (video) => video.id === currentVideoId
          );
          const prevVideoIndex =
            (currentVideoIndex - 1 + module.videos.length) %
            module.videos.length;
          return {
            ...module,
            videos: module.videos.map((video, index) => ({
              ...video,
              isPlaying: index === prevVideoIndex,
            })),
          };
        }
        return module;
      })
    );
  };

  return (
    <div className=" px-2 pt-2  bg-gray-200 h-full">
      <div className="flex flex-col md:flex-row gap-2">
        <ul className="w-full md:w-64 sm:block  bg-white shadow-lg p-6 rounded-lg">
          <li>
            {" "}
            <h1 className="text-2xl font-bold font-spaceGrotesk mb-6">Kurs tarkibi</h1>
          </li>
          {modules?.map((module) => (
            <li
              key={module.id}
              className="border-b py-3">
              <div className="flex justify-between items-center">
                <span className="text-[#444] text-[16px] font-semibold  font-spaceGrotesk">
                  {module.title}
                </span>
                <button
                  onClick={() => toggleModule(module.id)}
                  className="text-gray-500 text-sm">
                  {module.expanded ? <FaArrowDown  /> : <FaArrowRight />}
                </button>
              </div>
              {module.expanded && (
                <div className="mt-3 ">
                  {module.videos.map((video) => (
                    <div
                      key={video.id}
                      className="flex justify-between items-center hover:bg-slate-100 px-2 rounded-md cursor-pointer ">
                      <div className="py-2 flex w-full  justify-between items-center ">
                        <span >{video.id}. {video.name}</span>
                      </div>
                      {/* <input
                        type="checkbox"
                        name=""
                        id=""
                        className="cursor-pointer"
                      /> */}
                    </div>
                  ))}
                </div>
              )}
            </li>
          ))}
        </ul>
        <div className="flex-1 h-[85vh] w-full max-w-[1240px] mx-auto  shadow-md rounded-lg overflow-hidden">
          {modules?.map((module) =>
            module.videos.map(
              (video) =>
                video.isPlaying &&
                video.video && (
                  <div key={video.id}>
                    <div className="flex-1 h-[78vh] w-full bg-white shadow-md rounded-lg overflow-hidden">
                      <video
                        controlsList="nodownload"
                        className="h-full w-full bg-black "
                        controls>
                        <source
                          src={video.video}
                          type="video/mp4"
                        />
                        Your browser does not support the video tag.
                      </video>
                    </div>
                    <div className="flex  items-center justify-between py-1 px-2  bg-white rounded-lg mt-1 ">
                      <button
                        className="btn btn-primary btn-sm "
                        onClick={() => playPrevVideo(module.id, video.id)}
                        disabled={
                          module.videos.findIndex((v) => v.id === video.id) ===
                          0
                        }>
                        Oldingi dars {""}
                      </button>
                      <h3 className="font-semibold text-lg uppercase">
                        {video.id}. {video.name}
                      </h3>
                      {module.videos.findIndex((v) => v.id === video.id) ===
                      module.videos.length - 1 ? (
                        <Link to={"/quest"}
                          className="btn btn-primary btn-sm "
                          >
                          Start Quiz Test
                        </Link>
                      ) : (
                        <button
                          className="btn btn-primary btn-sm "
                          onClick={() => playNextVideo(module.id, video.id)}>
                          Keyingi dars
                        </button>
                      )}
                    </div>
                  </div>
                )
            )
          )}
        </div>
      </div>
    </div>
  );
};
export default Courses;
